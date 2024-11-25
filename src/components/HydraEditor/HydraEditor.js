import React, { useEffect, useRef, useState } from 'react';
import Hydra from 'hydra-synth';

const HydraEditor = () => {
  const hydraRef = useRef(null);
  const [code, setCode] = useState("osc(16, .25, 1.75) \n\t.pixelate() \n\t.rotate(.6) \n\t.modulatePixelate(noise(.1, .1), 10) \n\t.out()");
  const [lastValidCode, setLastValidCode] = useState('');

  useEffect(() => {
    if (!hydraRef.current) {
      hydraRef.current = new Hydra();
    }

    try {
        const func = new Function(code);
        func();
      } catch (error) {
        console.warn('Error en el código inicial:', error);
      }
  }, []);

  const handleCodeChange = (event) => {
    const newCode = event.target.value;
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
            console.error('Error reverting to last valid code:', revertError);
        }
    }
  };

  return (
    <div>
      <textarea
        value={code}
        onChange={handleCodeChange}
        style={{ width: '100%', height: '200px' }}
      />
      <div id="hydra-canvas"></div>
    </div>
  );
};

export default HydraEditor;