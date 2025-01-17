import React, { useRef } from 'react';
import './Contact.css';
import logo from '../../logo.svg';

const Contact = () => {
  const imgRef = useRef(null);

  const handleMouseDown = (e) => {
    e.preventDefault();
    const imgElement = imgRef.current;
    const shiftX = e.clientX - imgElement.getBoundingClientRect().left;
    const shiftY = e.clientY - imgElement.getBoundingClientRect().top;

    const moveAt = (pageX, pageY) => {
      imgElement.style.left = `${pageX - shiftX}px`;
      imgElement.style.top = `${pageY - shiftY}px`;
    };

    const onMouseMove = (e) => {
      moveAt(e.pageX, e.pageY);
    };

    document.addEventListener('mousemove', onMouseMove);

    document.onmouseup = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.onmouseup = null;
    };
  };

  const handleTouchStart = (e) => {
    e.preventDefault();
    const imgElement = imgRef.current;
    const touch = e.touches[0];
    const shiftX = touch.clientX - imgElement.getBoundingClientRect().left;
    const shiftY = touch.clientY - imgElement.getBoundingClientRect().top;

    const moveAt = (pageX, pageY) => {
      imgElement.style.left = `${pageX - shiftX}px`;
      imgElement.style.top = `${pageY - shiftY}px`;
    };

    const onTouchMove = (e) => {
      const touch = e.touches[0];
      moveAt(touch.pageX, touch.pageY);
    };

    document.addEventListener('touchmove', onTouchMove);

    document.ontouchend = () => {
      document.removeEventListener('touchmove', onTouchMove);
      document.ontouchend = null;
    };
  };

  return (
    <footer className="footer" id="contact">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          ref={imgRef}
          draggable="false" // Prevenir el comportamiento predeterminado
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        />
        <p>
            Es posible gracias a <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">React</a> + <a className="App-link" href="https://hydra.ojack.xyz" target="_blank" rel="noopener noreferrer">Hydra</a>
        </p>
        <p>
            clona esta repo: <code>https://github.com/rodryg/rodrigo.pe</code>
        </p>
        <p>puedes contactarme en</p>
        <p>
            <a href="https://www.instagram.com/rodryg" target="_blank" rel="noopener noreferrer">@rodryg</a>, <a href="https://www.linkedin.com/in/rodrigo-yrigoyen/" target="_blank" rel="noopener noreferrer">LinkedIn</a> o <a href="https://medium.com/@rodryg" target="_blank" rel="noopener noreferrer">Medium</a>
        </p>
        <p>rodrigo.pe rodrigo yrigoyen gonzales</p>
    </footer>
  );
};

export default Contact;