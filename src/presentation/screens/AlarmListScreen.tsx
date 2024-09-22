import React, { useState } from 'react';
import { View, Text, Switch, FlatList, StyleSheet } from 'react-native';

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
      <Text style={styles.title}>Manage your alarm list</Text>
      <FlatList
        data={alarms}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.alarmItem}>
            <Text>{item.time}</Text>
            <Text>{item.name}</Text>
            <Switch value={item.enabled} onValueChange={() => toggleAlarm(item.id)} />
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
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  alarmItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default AlarmListScreen;
