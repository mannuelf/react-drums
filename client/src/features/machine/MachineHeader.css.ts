import { style } from '@vanilla-extract/css';

export const machineHeader = style({
  display: 'flex',
  flexDirection: 'row',
  flexGrow: 1,
  flexWrap: 'nowrap',
  alignContent: 'flex-start',
  alignItems: 'stretch',
  justifyContent: 'flex-start',
  width: '100%',
  height: '48px',
  borderBottom: '1px solid #555',
  zIndex: 5,
});


export const machineTitle = style({
  color: '#ccc',
  fontFamily: 'Press Start 2P, Arial, Helvetica, sans-serif',
  lineHeight: '1.4',
  fontSize: '8px',
  fontWeight: 'normal',
  textTransform: 'uppercase',
});

export const machineSubTitle = style({
  color: 'yellow',
  fontSize: 12,
});

export const machineHeaderLcd = style({
  backgroundColor: '#222',
  border: '1px solid #464646',
  margin: '-10px 0',
  padding: '0.4em 1em',
  borderRadius: '3px',
  boxShadow: 'inset 0 0 5px #111111',
  borderBottom: '1px solid #666',
});

export const column = style({
  flexGrow: 1,
  selectors: {
    '&:nth-child(2)': {
      textAlign: 'left',
    },
  },
  '@media': {
    'screen and (min-width: 767px)': {
      width: '336px',
      float: 'right',
    },
  },
});

export const machineHeaderLogo = style({
  width: '140px',
  height: 'auto',
});

export const divStyle = style({
  selectors: {
    '&:nth-child(2)': {
      color: 'yellow',
    },
  },

});
