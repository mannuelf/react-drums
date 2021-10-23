import.meta;
const { env } = import.meta;
export const ENV = env;
export const AUTH_JWT = 'AUTH';
export const AUTH_TOKEN = 'abcdefg';
export const API_URL = 'http://localhost:4000';
export const LOGO: ILogo = {
  light:
    'https://res.cloudinary.com/mannuel/image/upload/v1634885670/images/logo-light.svg',
  dark: 'https://res.cloudinary.com/mannuel/image/upload/v1634885670/images/logo-dark.svg',
};
