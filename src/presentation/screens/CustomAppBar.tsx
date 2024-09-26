import React from 'react';
import { Appbar } from 'react-native-paper';
import { Image, StyleSheet } from 'react-native';
import { StackHeaderProps } from '@react-navigation/stack';

// Asegúrate de que CustomAppBar acepte las props de StackHeaderProps
const CustomAppBar = () => {
    return (
      <Appbar.Header>
        <Image
          source={require('../../assets/Vector.png')} // Cambia la ruta a tu logo
          style={styles.logo}
        />
      </Appbar.Header>
    );
  };

const styles = StyleSheet.create({
    appbar: {
        backgroundColor: 'transparent',
        borderBottomWidth: 0,
    },
    logo: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },
});

export { CustomAppBar };

