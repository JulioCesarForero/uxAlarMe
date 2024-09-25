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

const Stack = createStackNavigator();

export const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: (props) => <MaterialIcons {...props} />,
      }}
    >
      <NavigationContainer>
        <SafeAreaView style={styles.flexContainer}>
          <Stack.Navigator initialRouteName="Login">
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
