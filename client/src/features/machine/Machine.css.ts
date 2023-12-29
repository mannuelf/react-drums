import { style } from '@vanilla-extract/css';

export const machine = style({
  position: 'relative',
  width: '100%',
  maxWidth: '312px',
  margin: '5em auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1.5em',
  backgroundColor: '#181818',
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23404040' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E\")",
  boxShadow: '4px 4px 1px 2px rgba(0, 0, 0, 0.8)',
  borderRadius: '4px',
  borderBottom: '2px solid #000',
  borderLeft: '1px solid #333',
  borderTop: '1px solid #555',
  color: '#eee',
  '@media': {
    'screen and (min-width: 767px)': {
      maxWidth: '680px',
    },
  },
  '::before': {
    display: 'block',
    content: '',
    position: 'absolute',
    zIndex: 1,
    opacity: 0.6,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: '4px',
    backgroundColor: 'rgb(22, 22, 22)',
    background:
      'linear-gradient(353deg, rgba(22, 22, 22, 1) 0%, rgba(76, 76, 76, 1) 100%)',
    borderTop: '1px solid rgba(255,255,255,0.6)',
    borderLeft: '1px solid rgba(255,255,255,0.2)',
    borderBottom: '1px solid #464646'
  },
});
