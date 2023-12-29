import { style } from '@vanilla-extract/css';

export const machineHeader = style({
  alignContent: 'flex-start',
  alignItems: 'stretch',
  borderBottom: '1px solid #555',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  gap: '1em',
  height: '64px',
  justifyContent: 'flex-start',
  width: '100%',
  zIndex: 5,
});

export const machineColumn = style({
  selectors: {
    '&:nth-child(1)': {
      textAlign: 'left',
    },
    '&:nth-child(2)': {
      flex: '1 1 auto',
      textAlign: 'left',
    },
  },
});

export const machineTitle = style({
  color: '#ccc',
  fontFamily: '"Silkscreen", Arial, Helvetica, sans-serif',
  fontSize: '0.7em',
  fontWeight: 'normal',
  letterSpacing: '0',
  lineHeight: '0.1em',
});

export const machineSubTitle = style({
  color: 'yellow',
  fontFamily: '"Silkscreen", Arial, Helvetica, sans-serif',
  fontSize: '0.6em',
});

export const machineHeaderLcd = style({
  backgroundColor: '#222',
  border: '1px solid #464646',
  borderBottom: '1px solid #666',
  borderRadius: '3px',
  boxShadow: 'inset 0 0 5px #111111',
  padding: '0.4em 1em 0',
});

export const machineHeaderLcdContainer = style({
  width: '100%',
});

export const machineHeaderLogo = style({
  width: '140px',
  height: 'auto',
});
