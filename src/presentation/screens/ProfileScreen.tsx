import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { TextInput, Text, Appbar } from 'react-native-paper';

const ProfileScreen = () => {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [birthday, setBirthday] = React.useState('');

  return (
    <View style={styles.container}>


      {/* Logo */}
      <Image
        source={require('../../assets/imagen_profile.png')} // Puedes cambiar esta ruta según donde esté la imagen
        style={styles.logo}
      />

      {/* Information Text */}
      <Text style={styles.headerText}>Manage your account and personal settings</Text>
      <Text style={styles.subHeaderText}>Account Information</Text>

      {/* Inputs */}
      <TextInput
        label="Username"
        value={username}
        onChangeText={text => setUsername(text)}
        mode="outlined"
        style={styles.input}
      />

      <TextInput
        label="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        mode="outlined"
        keyboardType="email-address"
        style={styles.input}
      />

      <TextInput
        label="Birthday"
        value={birthday}
        onChangeText={text => setBirthday(text)}
        mode="outlined"
        style={styles.input}
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
  appbar: {
    backgroundColor: '#B7DFF4',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginVertical: 20,
  },
  headerText: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 10,
    color: '#000',
  },
  subHeaderText: {
    fontSize: 16,
    textAlign: 'left',
    marginVertical: 10,
    color: '#000',

  },
  input: {
    marginVertical: 10,
    backgroundColor: '#FFFFFF',
    color: '#000',

  },
});

export { ProfileScreen };
