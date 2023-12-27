import { faCode, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <footer>
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
    </StyledFooter>
  );
};

const StyledFooter = styled('footer')({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  color: '#fff',
  lineHeight: '30px',
  verticalAlign: 'middle',
  textAlign: 'center',
  fontSize: '12px',
  '& a:link, & a:visited ': {
    color: '#FFF',
    textDecoration: 'none',
  },
  '& a:active, & a:hover': {
    color: '#fb00ff',
    textDecoration: 'underline',
  },
});

export default Footer;
