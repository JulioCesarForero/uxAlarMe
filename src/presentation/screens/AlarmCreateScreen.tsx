import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const AlarmCreateScreen = () => {
  const [time, setTime] = useState(new Date());
  const [medicine, setMedicine] = useState('');
  const [frequency, setFrequency] = useState('');

  const onChangeTime = (event: any, selectedTime: Date | undefined) => {
    const currentTime = selectedTime || time;
    setTime(currentTime);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create a new alarm</Text>

      {/** Selector de hora */}
      <Text>Enter time</Text>
      <DateTimePicker value={time} mode="time" display="default" onChange={onChangeTime} />

      {/** Input de medicina */}
      <TextInput
        style={styles.input}
        placeholder="Medicine"
        value={medicine}
        onChangeText={setMedicine}
      />

      {/** Input de frecuencia */}
      <TextInput
        style={styles.input}
        placeholder="Frequency"
        value={frequency}
        keyboardType="numeric"
        onChangeText={setFrequency}
      />

      {/** Botones de guardar y cancelar */}
      <View style={styles.buttonContainer}>
        <Button title="Save" onPress={() => console.log('Saved')} />
        <Button title="Cancel" color="gray" onPress={() => console.log('Cancelled')} />
      </View>
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
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    height: 50,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default AlarmCreateScreen;
