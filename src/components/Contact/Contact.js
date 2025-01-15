import React from 'react';
import './Contact.css';
import logo from '../../logo.svg';

const Contact = () => {
  return (
    <footer className="footer">
        <img src={logo} className="App-logo" alt="logo" />
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