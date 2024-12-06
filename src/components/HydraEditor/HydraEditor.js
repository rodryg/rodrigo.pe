import React, { useEffect, useRef, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { createTheme } from '@uiw/codemirror-themes';
import { tags as t } from '@lezer/highlight';
import { javascript } from '@codemirror/lang-javascript';
import Hydra from 'hydra-synth';
import './HydraEditor.css';

const HydraEditor = () => {
  const hydraRef = useRef(null);
  const [code, setCode] = useState("osc(16, .25, 1.75)\n\t.pixelate()\n\t.rotate(.6)\n\t.modulatePixelate(noise(.1, .1), 10)\n\t.out()");
  const [lastValidCode, setLastValidCode] = useState('');

  const extensions = [javascript({ jsx: true })];

  const myTheme = createTheme({
    theme: 'rodrigo.pe',
    settings: {
      background: 'transparent',
      backgroundImage: '',
      foreground: '#fff',
      caret: '#f0f',
      selection: '#f0f',
      selectionMatch: '#036dd626',
      lineHighlight: '#8a91991a',
      gutterBackground: 'rgba(0,0,0,.5)',
      gutterForeground: '#8a919966',
      gutterBorder: 'transparent',
      fontSize: '1rem',
      fontFamily: 'inherit',
    },
    styles: [
      { tag: t.comment, color: '#f0f' },
      { tag: t.variableName, color: '#f0f' },
      { tag: [t.string, t.special(t.brace)], color: '#ff0' },
      { tag: t.number, color: '#ff0' },
      { tag: t.bool, color: '#ff0' },
      { tag: t.null, color: '#ff0' },
      { tag: t.keyword, color: '#ff0' },
      { tag: t.operator, color: '#ff0' },
      { tag: t.className, color: '#ff0' },
      { tag: t.definition(t.typeName), color: '#ff0' },
      { tag: t.typeName, color: '#ff0' },
      { tag: t.angleBracket, color: '#ff0' },
      { tag: t.tagName, color: '#ff0' },
      { tag: t.attributeName, color: '#ff0' },
    ],
  });

  useEffect(() => {
    if (!hydraRef.current) {
      hydraRef.current = new Hydra();

      const canvas = document.querySelector('canvas');
      if (canvas) {
        canvas.id = 'hydra-canvas';
        canvas.classList.add('hydra-class');
      }
    }

    try {
        const func = new Function(code);
        func();
      } catch (error) {
        console.warn('Error en el código inicial:', error.message);
      }
  }, []);

  const handleCodeChange = React.useCallback((value, viewUpdate) => {
    const newCode = value;
    setCode(newCode)
    try {
      const func = new Function(newCode);
      func();
      setLastValidCode(newCode);
    } catch (error) {
        console.warn('Error executing Hydra code:', error);
        try {
            const func = new Function(lastValidCode);
            func();
        } catch (revertError) {
            console.error('Error reverting to last valid code:', revertError.message);
        }
    }
  });

  return (
    <div>
      <span>puedes modificar el fondo:</span>
      <CodeMirror
        value={code}
        extensions={extensions}
        theme={myTheme}
        options={{
          lineWrapping: true,
          lineNumbers: false
        }}
        onChange={handleCodeChange}
      />
      <div id="hydra-canvas"></div>
    </div>
  );
};

export default HydraEditor;