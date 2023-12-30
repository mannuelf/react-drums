import { style } from '@vanilla-extract/css';

export const machineBodyMain = style({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  zIndex: 5,
});

export const machineBodyInner = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(64px, 1fr))',
  gridGap: '16px',
  padding: '1.5em 0 0 0',
  height: 'auto',
  width: '100%',
  borderTop: '1px solid #222',
  zIndex: 5,
});

export const machineLayoutColumn = style({
  flexGrow: 1,
  color: '#333',
  selectors: {
    '&:first-child': {
      display: 'none',
      '@media': {
        'screen and (min-width: 767px)': {
          display: 'block',
        },
      },
    },
  },
});
