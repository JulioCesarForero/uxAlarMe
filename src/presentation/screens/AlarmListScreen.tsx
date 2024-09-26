import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { Switch } from 'react-native-paper';

interface Alarm {
  id: string;
  time: string;
  name: string;
  enabled: boolean;
}

const initialAlarms: Alarm[] = [
  { id: '1', time: '08:00 AM', name: 'Amoxicilina', enabled: true },
  { id: '2', time: '09:00 AM', name: 'Ibuprofeno', enabled: false },
];

const AlarmListScreen = () => {
  const [alarms, setAlarms] = useState(initialAlarms);

  const toggleAlarm = (id: string) => {
    const updatedAlarms = alarms.map((alarm) =>
      alarm.id === id ? { ...alarm, enabled: !alarm.enabled } : alarm
    );
    setAlarms(updatedAlarms);
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/Vector.png')} style={styles.logo} />
      </View>
      
      <Text style={styles.title}>Manage your alarm list</Text>
      <FlatList
        data={alarms}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.alarmItem}>
            <View>
              <Text style={styles.timeText}>{item.time}</Text>
              <Text style={styles.nameText}>{item.name}</Text>
            </View>
            <Switch
              value={item.enabled}
              onValueChange={() => toggleAlarm(item.id)}
              color="#51798E" // Color del switch activo
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 50,
    resizeMode: 'contain',
    position: 'relative',
    top: 0, 
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  alarmItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  timeText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  nameText: {
    fontSize: 14,
    color: '#6C757D',
  },
});

export default AlarmListScreen;
