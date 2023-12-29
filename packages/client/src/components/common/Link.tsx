import { style } from '@vanilla-extract/css';

const Link = style({
  background: 'orangered',
  borderRadius: '3px',
  padding: '0.2rem 0.5rem',
  border: 'none',
  height: '68px',
  width: 'fit-content',
  cursor: 'pointer',
  boxShadow: '-2px 2px 2px rgba(0, 0, 0, 0.4)',
});

export default Link;
