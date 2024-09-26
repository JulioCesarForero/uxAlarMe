// import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";

// Definir las rutas de tu stack de navegación
export type RootStackParamList = {
  Login: undefined; // Pantalla de login no recibe parámetros
  HomeScreen: undefined; // Pantalla de Home no recibe parámetros
//   Main: undefined; // Definir otras pantallas aquí si es necesario
};

// Definir el tipo para las props de LoginScreen
export type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;
