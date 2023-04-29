import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo_civitatis.png'

import './footer.css';

function Footer() {
  useEffect(() => {
    const bubbles = document.querySelector('.bubbles');
    for (let i = 0; i < 128; i++) {
      const bubble = document.createElement('div');
      bubble.classList.add('bubble');
      bubble.style.setProperty('--size', `${2+Math.random()*4}rem`);
      bubble.style.setProperty('--distance', `${6+Math.random()*4}rem`);
      bubble.style.setProperty('--position', `${-5+Math.random()*110}%`);
      bubble.style.setProperty('--time', `${2+Math.random()*2}s`);
      bubble.style.setProperty('--delay', `${-1*(2+Math.random()*2)}s`);
      bubbles.appendChild(bubble);

      setTimeout(() => {
        bubble.style.opacity = 0;
        setTimeout(() => {
          bubbles.removeChild(bubble);
        }, 2000);
      }, Math.random()*15000);
    }
  }, []);

  return (
    <div className="footer">
      <div className="bubbles"></div>
      <div className="content">
        <div>
          <div>
            <b>Explora</b>
            <Link to="#">Buscador</Link>
            <Link to="#">Destinos</Link>
          </div>
          <div>
            <b>Siguenos</b>
            <Link to="https://www.facebook.com/civitatis" target="_blank">Facebook</Link>
            <Link to="https://www.instagram.com/civitatis/?hl=es" target="_blank">Instagram</Link>
            <Link to="https://twitter.com/civitatis?lang=es">Twitter</Link>
          </div>
          <div>
            <b>Políticas</b>
            <Link to="#">Privacidad</Link>
            <Link to="#">Aviso Legal</Link>
          </div>
          <div>
          <p>©2023 Todos los derechos Reservados Luis y Alba</p>
          </div>
        </div>
      </div>

      <div className="logo">
        <img src={logo} className='logofooter' alt="civitatis"/>
      </div>
    </div>
  )
}

export default Footer
