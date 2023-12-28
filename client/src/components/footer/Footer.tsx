import { faCode, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { style } from '@vanilla-extract/css';
import React from 'react';

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

export const footerStyle = style({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  backgroundColor: '#FF9900',
  color: '#fff',
  lineHeight: '30px',
  verticalAlign: 'middle',
  textAlign: 'center',
  fontSize: '12px',
});

export default Footer;
