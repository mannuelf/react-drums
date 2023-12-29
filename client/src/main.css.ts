import { globalStyle } from '@vanilla-extract/css';

globalStyle('body', {
  touchAction: 'manipulation',
  WebkitTapHighlightColor: 'transparent',
  overflow: 'hidden',
  fontFamily: 'Helvetica Neue, Arial, sans-serif',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  backgroundColor: '#583d29',
  backgroundImage:
    'url(https://res.cloudinary.com/mannuel/image/upload/v1703861156/wood2.svg)',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'repeat',
});