import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Chip, List, Checkbox, Avatar, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


const MedicineScreen = () => {
  const [selectedFilter, setSelectedFilter] = useState('All'); // Estado para los filtros
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
      {/* Filtros */}
      <View style={styles.chipContainer}>
        <Chip
          icon={() => (
            <Image
              source={require('../../assets/filter_alt.png')} // Cambia la ruta por la de tu imagen
              style={{ width: 12, height: 12 }} // Ajusta el tamaño de la imagen
            />
          )}
          selected={selectedFilter === 'All'}
          onPress={() => setSelectedFilter('All')}
          style={styles.chip}
        >
          <Text style={{ color: '#51798E' }}>All</Text>
        </Chip>
        <Chip
          icon={() => (
            <Image
              source={require('../../assets/filter_alt.png')} // Cambia la ruta por la de tu imagen
              style={{ width: 12, height: 12 }} // Ajusta el tamaño de la imagen
            />
          )}
          selected={selectedFilter === 'Alarm'}
          onPress={() => setSelectedFilter('Alarm')}
          style={styles.chip}
        >
          <Text style={{ color: '#51798E' }}>Alarm</Text>
        </Chip>
        <Chip
          icon={() => (
            <Image
              source={require('../../assets/filter_alt.png')} // Cambia la ruta por la de tu imagen
              style={{ width: 12, height: 12 }} // Ajusta el tamaño de la imagen
            />
          )}
          selected={selectedFilter === 'Recurrence'}
          onPress={() => setSelectedFilter('Recurrence')}
          style={styles.chip}
          textStyle={{ color: '#51798E' }} // Cambia el color del texto aquí
        >
          
        <Text style={{ color: '#51798E' }}>Recurrence</Text>
        </Chip>
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
      {/* Botón para redirigir a la pantalla de "My Meds" */}
      <Button
        mode="contained"
        onPress={() => navigation.navigate('MyMedsScreen' as never)}  // Tipo validado correctamente
        style={styles.button}
        buttonColor="#51798E"
      >
      <Text style={{ color: '#FFFFFF' }}> View My Meds</Text>
      </Button>
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
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
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
});

export { MedicineScreen };
