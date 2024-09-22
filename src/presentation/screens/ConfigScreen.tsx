import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const ConfigScreen = () => {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [permissionsEnabled, setPermissionsEnabled] = useState(false);
  const [voiceAlertsEnabled, setVoiceAlertsEnabled] = useState(false);
  const [securityEnabled, setSecurityEnabled] = useState(false);
  const [contactsEnabled, setContactsEnabled] = useState(false);

  return (
    <View style={styles.container}>
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
});

export default ConfigScreen;
