import { faCode, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { footerStyle } from './Footer.css';

const Footer: React.FC = () => {
  return (
      <footer className={footerStyle}>
        Built with <FontAwesomeIcon icon={faHeart} /> by{' '}
        <a
          href='https://mannuelferreira.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          Mannuel Ferreira
        </a>{' '}
        <a
          href='https://github.com/mannuelf/react-drums'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon icon={faCode} /> Fork it on github.
        </a>
      </footer>
  );
};

export default Footer;
