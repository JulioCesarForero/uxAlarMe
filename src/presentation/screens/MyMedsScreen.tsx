import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {  List, Checkbox, Avatar, Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const MyMedsScreen = () => {
  const [checkedItems, setCheckedItems] = useState([false, false]); // Estado para los items de la lista
  const navigation = useNavigation(); // Hook de React Navigation para la navegación


  // Función para alternar el estado del checkbox
  const handleCheck = (index: number) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  return (
    <ScrollView style={styles.container}>
      {/* AppBar manual */}
      <View style={styles.appBar}>
        {/* Flecha de retorno */}
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Image source={require('../../assets/back_arrow.png')} style={styles.icon} />
        </TouchableOpacity>

        {/* Logotipo */}
        <Image source={require('../../assets/PRINT.png')} style={styles.logo} />

        {/* Botón de agregar */}
        <TouchableOpacity onPress={() => { /* Acción del botón + */ }} style={styles.addButton}>
          <Image source={require('../../assets/plus_icon.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.separator} >
      <Text style={styles.title}>Your Medications</Text>
      </View>
      {/* Lista de Items */}
      <List.Section>
        <List.Item
          titleStyle={{ color: '#51798E' }}
          descriptionStyle={{ color: '#51798E' }}
          title="List item"
          description="Supporting line text lorem ipsum dolor sit amet, consectetur."
          left={(props) => (
            <Avatar.Image 
              {...props} 
              size={48} // Puedes ajustar el tamaño aquí
              source={require('../../assets/image-fake.png')} // Ruta de la imagen
            />
          )}
          right={() => (
            <Checkbox
              color='#51798E'
              status={checkedItems[0] ? 'checked' : 'indeterminate'}
              onPress={() => handleCheck(0)}
            />
          )}
          style={styles.listItem}
        />
        <List.Item
          titleStyle={{ color: '#51798E' }}
          descriptionStyle={{ color: '#51798E' }}
          title="List item"
          description="Supporting line text lorem ipsum dolor sit amet, consectetur."
          left={(props) => (
            <Avatar.Image 
              {...props} 
              size={48} 
              source={require('../../assets/image-fake.png')} // Ruta de la segunda imagen
            />
          )}
          right={() => (
            <Checkbox
              color='#51798E'
              status={checkedItems[1] ? 'checked' : 'indeterminate'}
              onPress={() => handleCheck(1)}
            />
          )}
          style={styles.listItem}
        />
      </List.Section>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  chipContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    backgroundColor: 'rgba(183, 223, 244, 0.2)',
  },
  chip: {
    backgroundColor: 'rgba(183, 223, 244, 0.2)', // Similar al estilo en la imagen
    marginHorizontal: 4,
    color: '#51798E',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#51798E',
  },
  listItem: {
    backgroundColor: 'rgba(183, 223, 244, 0.2)', // Similar al estilo en la imagen
    marginBottom: 10,
    borderRadius: 8,
  },
  button: {
    marginTop: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 16,
    fontSize: 18,
    color: '#51798E',
  },
  logo: {
    width: 160,
    height: 40,
  },
  header: {
    backgroundColor: 'rgba(183, 223, 244, 0.2)',
  },
  appBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 10,
    
  },
  backButton: {
    padding: 10,
  },
  addButton: {
    padding: 10,
    backgroundColor: '#E6F0F4',
    borderRadius: 8,
  },
  icon: {
    width: 12,
    height: 12,
  },
  separator: {
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#51798E',
    backgroundColor: '51798E',
  },
});

export { MyMedsScreen };
