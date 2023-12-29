import { style } from '@vanilla-extract/css';

export const footerStyle = style({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  backgroundColor: 'rgba(0 0 0 / 49%)',
  verticalAlign: 'middle',
  textAlign: 'center',
  padding: '1em',
});

export const footerLinkStyle = style({
  color: '#fff',
  fontSize: '1em',
  padding: '0.5em',
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline',
  },
});
