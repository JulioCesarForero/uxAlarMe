import React, { useState } from 'react';
import { View, Text,  StyleSheet, Image } from 'react-native';
import { Switch } from 'react-native-paper';

const ConfigScreen = () => {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [permissionsEnabled, setPermissionsEnabled] = useState(false);
  const [voiceAlertsEnabled, setVoiceAlertsEnabled] = useState(false);
  const [securityEnabled, setSecurityEnabled] = useState(false);
  const [contactsEnabled, setContactsEnabled] = useState(false);

  return (
    <View style={styles.container}>
            {/* Logo */}
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/Vector.png')} style={styles.logo} />
      </View>
      <Text style={styles.title}>Manage your alarm settings</Text>

      {/** Configuración de los switches */}
      <View style={styles.switchRow}>
        <Text>Sound</Text>
        <Switch value={soundEnabled} onValueChange={setSoundEnabled} />
      </View>

      <View style={styles.switchRow}>
        <Text>Permissions</Text>
        <Switch value={permissionsEnabled} onValueChange={setPermissionsEnabled} />
      </View>

      <View style={styles.switchRow}>
        <Text>Voice Alerts</Text>
        <Switch value={voiceAlertsEnabled} onValueChange={setVoiceAlertsEnabled} />
      </View>

      <View style={styles.switchRow}>
        <Text>Security and Privacy</Text>
        <Switch value={securityEnabled} onValueChange={setSecurityEnabled} />
      </View>

      <View style={styles.switchRow}>
        <Text>Access to contacts</Text>
        <Switch value={contactsEnabled} onValueChange={setContactsEnabled} />
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
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 224,
    height: 47,
    resizeMode: 'contain',
    position: 'relative',
    top: 0, 
  },
});

export default ConfigScreen;
