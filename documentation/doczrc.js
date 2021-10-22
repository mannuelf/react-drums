export default {
  typescript: true,
  propsParser: true,
  themeConfig: {
    mode: 'dark',
    logo: {
      src: {
        light:
          'https://res.cloudinary.com/mannuel/image/upload/v1634473279/images/logo-dark.svg',
        dark:
          'https://res.cloudinary.com/mannuel/image/upload/v1634473279/images/logo-light.svg',
      },
      width: 260,
    },
    menu: {
      search: false,
      headings: {
        rightSide: true,
        scrollspy: true,
        depth: 3,
      },
    },
  },
  menuDisplayName: {
    UI: 'User Interface',
    Main: 'Main Container',
  },
  groups: {
    START: ['Welcome'],
    FRONTEND: ['Introduction', 'Components'],
    SERVER: ['Server'],
  },
  menu: [
    {
      name: 'Welcome',
      menu: [''],
    },
    {
      name: 'Introduction',
      menu: [''],
    },
    {
      name: 'Components',
      menu: ['Button', 'Input', 'Footer'],
    },
    {
      name: 'Server',
      menu: ['Getting started'],
    },
    {
      name: 'Todo',
      menu: [''],
    },
  ],
};
