import React, { useRef } from 'react';
import './Contact.css';
import logo from '../../logo.svg';

const Contact = () => {
  const imgRef = useRef(null);
  
  const disableContextMenuAndSelection = (element) => {
    element.style.webkitTouchCallout = 'none';
    element.style.webkitUserSelect = 'none';
    element.style.userSelect = 'none';
    element.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    }, { passive: false });
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    const imgElement = imgRef.current;
    disableContextMenuAndSelection(imgElement);
    const shiftX = e.clientX - imgElement.getBoundingClientRect().left;
    const shiftY = e.clientY - imgElement.getBoundingClientRect().top;

    const moveAt = (pageX, pageY) => {
      const newLeft = pageX - shiftX;
      const newTop = pageY - shiftY;

      const minLeft = -imgElement.offsetWidth / 2;
      const minTop = -imgElement.offsetHeight / 2;
      const maxLeft = window.innerWidth - imgElement.offsetWidth / 2;
      const maxTop = document.documentElement.scrollHeight - imgElement.offsetHeight / 2;

      imgElement.style.left = `${Math.min(Math.max(newLeft, minLeft), maxLeft)}px`;
      imgElement.style.top = `${Math.min(Math.max(newTop, minTop), maxTop)}px`;
    };

    const onMouseMove = (e) => {
      moveAt(e.pageX, e.pageY);
    };

    document.addEventListener('mousemove', onMouseMove);

    document.addEventListener(
      'mouseup',
      () => {
        document.removeEventListener('mousemove', onMouseMove);
      },
      { once: true }
    );

    imgRef.current.addEventListener('mousedown', handleMouseDown);
  };

  const handleTouchStart = (e) => {
    e.preventDefault();
    const imgElement = imgRef.current;
    disableContextMenuAndSelection(imgElement);
    const touch = e.touches[0];
    const shiftX = touch.clientX - imgElement.getBoundingClientRect().left;
    const shiftY = touch.pageY - (imgElement.getBoundingClientRect().top + window.scrollY);

    const moveAt = (pageX, pageY) => {
      const newLeft = pageX - shiftX;
      const newTop = pageY - shiftY;

      const minLeft = -imgElement.offsetWidth / 2;
      const minTop = -imgElement.offsetHeight / 2;
      const maxLeft = window.innerWidth - imgElement.offsetWidth / 2;
      const maxTop = document.documentElement.scrollHeight - imgElement.offsetHeight / 2;
      
      imgElement.style.left = `${Math.min(Math.max(newLeft, minLeft), maxLeft)}px`;
      imgElement.style.top = `${Math.min(Math.max(newTop, minTop), maxTop)}px`;
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
            Este sitio es posible gracias a <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">React</a> + <a className="App-link" href="https://hydra.ojack.xyz" target="_blank" rel="noopener noreferrer">Hydra</a>
        </p>
        <p>
            clona esta repo:
        </p>
        <p>
          <a href="https://github.com/rodryg/rodrigo.pe" target="_blank" rel="noopener noreferrer"><code>https://github.com/rodryg/rodrigo.pe</code></a>
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