import React from 'react';
import { SafeAreaView } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/presentation/screens/LoginScreen';
import AlarmListScreen from './src/presentation/screens/AlarmListScreen';

// Crear Stack Navigator
const Stack = createStackNavigator();

export const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: (props) => <MaterialIcons {...props} />,
      }}
    >
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1 }}>
          <Stack.Navigator initialRouteName="Login">
            {/* Pantalla de Login */}
            <Stack.Screen 
              name="Login" 
              component={LoginScreen} 
              options={{ title: 'Login' }}
            />
            
            {/* Pantalla de lista de alarmas */}
            <Stack.Screen 
              name="AlarmListScreen" 
              component={AlarmListScreen} 
              options={{ title: 'Manage your alarms' }} 
            />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
