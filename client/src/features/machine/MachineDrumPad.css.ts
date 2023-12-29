import { style } from '@vanilla-extract/css';

export const machineDrumPad = style({
  position: 'relative',
  outline: 'none',
  color: '#fff',
  transition: 'all 0.4s ease-in-out',
  selectors: {
    '&::before': {
      display: 'block',
      content: '""',
      position: 'absolute',
      zIndex: 2,
      opacity: 0.8,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      borderRadius: '3px',
      borderTop: '1px solid rgba(255, 255, 255, 0.8)',
    },
    '&::after': {
      display: 'block',
      content: '""',
      position: 'absolute',
      zIndex: 1,
      opacity: 0.3,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      borderRadius: '3px',
      background: 'radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(0, 0, 0, 1) 100%)',
    },
    '&:nth-child(1)': { backgroundColor: '#4d94fc', order: 16 },
    '&:nth-child(2)': { backgroundColor: '#4d94fc', order: 15 },
    '&:nth-child(3)': { backgroundColor: '#ffdd2f', order: 14 },
    '&:nth-child(4)': { backgroundColor: '#ff423e', order: 13 },
    '&:nth-child(5)': { backgroundColor: '#4d94fc', order: 12 },
    '&:nth-child(6)': { backgroundColor: '#19eaa3', order: 11 },
    '&:nth-child(7)': { backgroundColor: '#ffdd2f', order: 10 },
    '&:nth-child(8)': { backgroundColor: '#ffdd2f', order: 9 },
    '&:nth-child(9)': { backgroundColor: '#fc9824', order: 8 },
    '&:nth-child(10)': { backgroundColor: '#fc9824', order: 7 },
    '&:nth-child(11)': { backgroundColor: '#fc9824', order: 6 },
    '&:nth-child(12)': { backgroundColor: '#fc9824', order: 5 },
    '&:nth-child(13)': { backgroundColor: '#19eaa3', order: 4 },
    '&:nth-child(14)': { backgroundColor: '#19eaa3', order: 3 },
    '&:nth-child(15)': { backgroundColor: '#19eaa3', order: 2 },
    '&:nth-child(16)': { backgroundColor: '#19eaa3', order: 1 },
  },
});

export const padButton = style({
  background: '#444',
  borderRadius: '3px',
  padding: '1rem',
  border: 'none',
  height: '68px',
  width: '100%',
  cursor: 'pointer',
  boxShadow: '-2px 2px 2px rgba(0, 0, 0, 0.4)',
});

export const padButtonNameStyle = style({
  fontSize: '12px',
});

export const padButtonIdStyle = style({
  fontSize: '10px',
  position: 'absolute',
  top: '4px',
  left: '4px',
});
