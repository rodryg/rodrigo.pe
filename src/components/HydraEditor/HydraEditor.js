import React, { useEffect, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { EditorView } from '@codemirror/view';
import { createTheme } from '@uiw/codemirror-themes';
import { tags as t } from '@lezer/highlight';
import { javascript } from '@codemirror/lang-javascript';
import Hydra from 'hydra-synth';
import './HydraEditor.css';

let hydraInstance = null;

const HydraEditor = () => {
  const [code, setCode] = useState(() => {
    // Obtener el código del localStorage o usar el código por defecto
    //return localStorage.getItem('hydraCode') || "osc(16, .25, 1.75)\n\t.pixelate()\n\t.rotate(.6)\n\t.modulatePixelate(noise(.1, .1), 10)\n\t.out()";
    return localStorage.getItem('hydraCode') || "osc(1, .25, 1.75)\n\t.color(.5, .25, .25)\n\t//.contrast(4).brightness(1.125)\n\t.pixelate()\n\t.rotate(.6)\n\t.modulatePixelate(\n\t\tnoise(.1, .1), 10)\n\t.out()\n\n// *prueba cambiar el número 1 de la primera línea por un 16 para variar el fondo ;)\n\n// *elaborado usando hydra.ojack.xyz";
  });
  const [lastValidCode, setLastValidCode] = useState('');

  const extensions = [
    javascript({ jsx: true }),
    EditorView.lineWrapping
  ];

  const hydraTheme = createTheme({
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

  async function checkPermissions() {
    try {
      const audioPermission = await navigator.permissions.query({ name: 'microphone' });
      const videoPermission = await navigator.permissions.query({ name: 'camera' });

      const detectAudio = audioPermission.state === 'granted';
      const detectVideo = videoPermission.state === 'granted';

      return { detectAudio, detectVideo };
    } catch (error) {
      console.error('Error checking permissions:', error);
      return { detectAudio: false, detectVideo: false };
    }
  }

  useEffect(() => {
    if (!hydraInstance) {
      hydraInstance = new Hydra({ detectAudio: false, detectVideo: false });
    }

    try {
        const func = new Function(code);
        func();
      } catch (error) {
        console.warn('Error en el código inicial:', error.message);
      }
  }, []);

  const handleCodeChange = React.useCallback(async (value, viewUpdate) => {
    const { detectAudio, detectVideo } = await checkPermissions();
    const newCode = value;
    setCode(newCode)
    try {
      if (newCode.includes('s0.initCam') || newCode.includes('s0.initAudio')) {
        
        if (newCode.includes('s0.initAudio') && !detectAudio) {
          if (!hydraInstance) {
            hydraInstance = new Hydra({ detectAudio });
          } else {
            console.log("reniú audio");
            const canvases = document.querySelectorAll('canvas');
            canvases.forEach(canvas => {
              document.body.removeChild(canvas);
            });
            hydraInstance = new Hydra({ detectAudio });
          }
        }

        if (newCode.includes('s0.initCam') && !detectVideo) {
          if (!hydraInstance) {
            hydraInstance = new Hydra({ detectVideo });
          } else {
            console.log("reniú video");
            const canvases = document.querySelectorAll('canvas');
            canvases.forEach(canvas => {
              document.body.removeChild(canvas);
            });
            hydraInstance = new Hydra({ detectVideo });
          }
        }

      }
      const func = new Function(newCode);
      func();
      setLastValidCode(newCode);
      // Guardar el código en el localStorage
      localStorage.setItem('hydraCode', newCode);
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
    <div className="hydra-editor-container">
      <span>puedes modificar el fondo:</span>
      <CodeMirror
        value={code}
        extensions={extensions}
        theme={hydraTheme}
        options={{
          lineWrapping: true,
          lineNumbers: false
        }}
        onChange={handleCodeChange}
      />
      {/* <div id="hydra-canvas"></div> */}
    </div>
  );
};

export default HydraEditor;