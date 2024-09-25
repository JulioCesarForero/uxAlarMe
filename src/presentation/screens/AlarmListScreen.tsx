import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements'; 
import AlarmCreateScreen from './AlarmCreateScreen';
import { MedicineScreen } from './MedicineScreen';
import ConfigScreen from './ConfigScreen';
import { ProfileScreen } from './ProfileScreen';

// import AlarmCreateScreen from '../presentation/screens/AlarmCreateScreen';
// import AlarmListScreen from '../presentation/screens/AlarmListScreen'; // Importamos AlarmListScreen
// import ConfigScreen from '../presentation/screens/ConfigScreen'; 
// import { MedicineScreen } from '../presentation/screens/MedicineScreen';
// import { ProfileScreen } from '../presentation/screens/ProfileScreen';

const Tab = createBottomTabNavigator();
const AlarmStack = createStackNavigator();

function AlarmStackNavigator() {
  return (
    <AlarmStack.Navigator>
      <AlarmStack.Screen 
        name="AlarmCreateScreen" 
        component={AlarmCreateScreen} 
        options={{ title: 'Create Alarm' }} 
      />
      {/* <AlarmStack.Screen 
        name="AlarmListScreen" 
        component={AlarmListScreen} 
        options={{ title: 'Alarm List' }} 
      /> */}
    </AlarmStack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Alarms"
      screenOptions={{
        tabBarActiveTintColor: '#00A4CCFF',
      }}
    >
      <Tab.Screen
        name="Alarms"
        component={AlarmStackNavigator} // Usa el Stack Navigator para la pestaña Alarms
        options={{
          tabBarLabel: 'Alarms',
          tabBarIcon: ({ color, size }) => (
            <Icon name="alarm" type="material" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Medicine"
        component={MedicineScreen}
        options={{
          tabBarLabel: 'Medicine',
          tabBarIcon: ({ color, size }) => (
            <Icon name="medical-services" type="material" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Config"
        component={ConfigScreen}
        options={{
          tabBarLabel: 'Config',
          tabBarIcon: ({ color, size }) => (
            <Icon name="settings" type="material" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" type="material" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
