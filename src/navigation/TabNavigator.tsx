import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import AlarmCreateScreen from '../presentation/screens/AlarmCreateScreen';
import AlarmListScreen from '../presentation/screens/AlarmListScreen';
import ConfigScreen from '../presentation/screens/ConfigScreen'; 
import { Icon } from 'react-native-elements'; 
import { MedicineScreen } from '../presentation/screens/MedicineScreen';
import { ProfileScreen } from '../presentation/screens/ProfileScreen';

const Tab = createBottomTabNavigator();

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
        component={AlarmListScreen} // Ahora esta pantalla estará en la pestaña Alarms
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
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" type="material" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
