import React, { useState } from 'react';
import { BottomNavigation } from 'react-native-paper';
import AlarmListScreen from '../presentation/screens/AlarmListScreen';
import ConfigScreen from '../presentation/screens/ConfigScreen';
import { MedicineScreen } from '../presentation/screens/MedicineScreen';
import { ProfileScreen } from '../presentation/screens/ProfileScreen';

// Definir rutas para las pantallas
const AlarmRoute = () => <AlarmListScreen />;
const MedicineRoute = () => <MedicineScreen />;
const ConfigRoute = () => <ConfigScreen />;
const ProfileRoute = () => <ProfileScreen />;

function MyTabs() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'alarms', title: 'Alarms', focusedIcon: 'alarm', unfocusedIcon: 'alarm' },
    { key: 'medicine', title: 'Medicine', focusedIcon: 'medical-bag', unfocusedIcon: 'medical-bag' },
    { key: 'config', title: 'Config', focusedIcon: 'cog', unfocusedIcon: 'cog-outline' },
    { key: 'profile', title: 'Profile', focusedIcon: 'account', unfocusedIcon: 'account-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    alarms: AlarmRoute,
    medicine: MedicineRoute,
    config: ConfigRoute,
    profile: ProfileRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      activeColor="#ffffff" // Color cuando el ícono está activo
      inactiveColor="#cfcfcf" // Color cuando está inactivo
      barStyle={{ backgroundColor: '#51798E', height: 60 }} // Color de fondo y altura de la barra
    />
  );
}

export default MyTabs;
