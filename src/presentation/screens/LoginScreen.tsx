import React, { useState } from 'react';
import { View, StyleSheet, Image, Alert } from 'react-native';
import { Text, TextInput, Button, useTheme } from 'react-native-paper';
import { LoginScreenProps } from '../../types';


const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { colors } = useTheme();  // Obtener los colores del tema actual

  const handleLogin = () => {
    if (email && password) {
      navigation.navigate('HomeScreen');
    } else {
      Alert.alert('Error', 'Please enter email and password');
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={require('../../assets/Vector.png')} style={styles.logo} />

      {/* Welcome Text */}
      <Text variant="headlineMedium" style={styles.title}>Welcome</Text>
      <Text variant="bodyMedium" style={styles.subtitle}>Log in to your AlarMe account</Text>

      {/* Email Input */}
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
        mode="outlined"
        placeholder="Enter your email"
      />

      {/* Password Input */}
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
        style={styles.input}
        mode="outlined"
        placeholder="Enter your password"
      />

      {/* Login Button */}
      <Button
        mode="contained"
        onPress={handleLogin}
        style={styles.button}
        contentStyle={styles.buttonContent}
      >
        Login
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  logo: {
    width: 300,
    height: 100,
    marginBottom: 30,
    justifyContent: 'center',
    resizeMode: 'contain',
  },
  title: {
    marginBottom: 5,
  },
  subtitle: {
    marginBottom: 20,
    color: 'gray',
  },
  input: {
    width: '100%',
    marginBottom: 20,
  },
  button: {
    width: '100%',
    justifyContent: 'center',
  },
  buttonContent: {
    height: 50,
  },
});

export default LoginScreen;
