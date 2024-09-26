import React from 'react';
import { Appbar } from 'react-native-paper';
import { Image, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CustomAppBar = () => {
  const navigation = useNavigation();

  return (
    <Appbar.Header style={styles.header}>
      {/* Botón de atrás */}
      <Appbar.Action icon="arrow-left" onPress={() => navigation.goBack()} />

      {/* Logotipo central */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/Vector.png')}  // Asegúrate de ajustar la ruta a tu logotipo
          style={styles.logo}
        />
      </View>

      {/* Botón de agregar */}
      <Appbar.Action icon="alarm" onPress={() => { /* Acción al presionar el botón + */ }} style={styles.addButton} />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#B7DFF4', // Color de fondo del AppBar
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
  },
  addButton: {
    backgroundColor: '#E6F0F4',
    borderRadius: 10,
    padding: 4,
  },
});

export { CustomAppBar };
