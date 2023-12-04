import {extendTheme} from 'native-base';

export const theme = extendTheme({
  colors: {
    white: '#FFFFFF',

    gray: {
      100: '#F8F4F0',
      200: '#EDE7E1',
      300: '#DED5CC',
      400: '#D6D3CB',
      500: '#CEC4BA',
      600: '#A0A0A0',
      700: '#707070',
      750: '#6A6868',
      900: '#252525',
    },

    red: {
      200: '#E1211A',
      300: '#E10717',
      400: '#B31C16',
    },

    green: {
      500: '#11A717',
    },

    blue: {
      200: '#D7F1F8',
      400: '#55E8BB',
      600: '#287DFC',
    },

    red100: '#E10717',
    red200: '#B31C16',

    blue100: '#D7F1F8',
    blue200: '#55E8BB',
    blue300: '#287DFC',

    green200: '#B4F3B4',
    green300: '#11A717',

    yellow100: '#FBEF35',
    yellow200: '#D9AF36',

    gray300: '#6A6868',
  },

  fonts: {
    body: 'Roboto-Regular',
  },
});
