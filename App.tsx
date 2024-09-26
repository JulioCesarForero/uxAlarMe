import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MyTabs from './src/navigation/TabNavigator';
import LoginScreen from './src/presentation/screens/LoginScreen';
import AlarmListScreen from './src/presentation/screens/AlarmListScreen'; // Importa AlarmListScreen aquí
import HomeScreen from './src/presentation/screens/HomeScreen';
import { CustomAppBar } from './src/presentation/screens/CustomAppBar';
import { MyMedsScreen } from './src/presentation/screens/MyMedsScreen';
import { MedicineScreen } from './src/presentation/screens/MedicineScreen';
// Define los tipos de las rutas
type RootStackParamList = {
  MyMedsScreen: undefined;
  HomeScreen: undefined;
  Login: undefined;
  Main: undefined;
};


const Stack = createStackNavigator<RootStackParamList>();

export const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: (props) => <MaterialIcons {...props} />,
      }}
    >
      <NavigationContainer>
        <SafeAreaView style={styles.flexContainer}>
          
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
            }}
          >
            <Stack.Screen 
              name="Login" 
              component={LoginScreen} 
              options={{ headerShown: false }}
            />
            <Stack.Screen 
              name="Main" 
              component={MyTabs} 
              options={{ headerShown: false }} // Ocultamos el header del stack porque ya tenemos la barra inferior
            />
            {/* Registra AlarmListScreen como parte del Stack Navigator */}
            <Stack.Screen 
              name="HomeScreen" 
              component={HomeScreen} 
              options={{ headerShown: false }}
            />
            <Stack.Screen 
              name="MyMedsScreen" 
              component={MyMedsScreen} 
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1
  }
});

export default App;
