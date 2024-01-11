import React from 'react';
import { footerLinkStyle, footerStyle } from './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className={footerStyle}>
      <a
        className={footerLinkStyle}
        href='https://mannuelferreira.com'
        target='_blank'
        rel='noopener noreferrer'
      >
        www.mannuelferreira.com
      </a>
      |
      <a
        className={footerLinkStyle}
        href='https://github.com/mannuelf/react-drums'
        target='_blank'
        rel='noopener noreferrer'
      >
        Fork it on github.
      </a>
      |
      <a
        className={footerLinkStyle}
        href='https://www.svgbackgrounds.com/'
        target='_blank'
        rel='noopener noreferrer'
      >
        Background by www.svgbackgrounds.com
      </a>
    </footer>
  );
};

export default Footer;
