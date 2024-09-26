import { MD3LightTheme as DefaultTheme } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  roundness: 10, // Bordes más redondeados en los botones y componentes
  colors: {
    ...DefaultTheme.colors,
    primary: '#51798E', // Color principal acorde al diseño
    secondary: '#6C757D',
    background: '#FFFFFF',
    surface: '#FFFFFF',
    text: '#000000',
    error: '#B00020',
    // Puedes ajustar más colores según lo que necesites
  },
};

export default theme;
