import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { Chip, List, Checkbox, Avatar, Text } from 'react-native-paper';

const MedicineScreen = () => {
  const [selectedFilter, setSelectedFilter] = useState('All'); // Estado para los filtros
  const [checkedItems, setCheckedItems] = useState([false, false]); // Estado para los items de la lista

  // Función para alternar el estado del checkbox
  const handleCheck = (index: number) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  return (
    <ScrollView style={styles.container}>
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
          <Text style={{ color: '#51798E' }} variant="labelLarge">All</Text>
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
          <Text style={{ color: '#51798E' }} variant="labelLarge">Alarm</Text>
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
          
        <Text style={{ color: '#51798E' }} variant="labelLarge">Recurrence</Text>
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
});

export { MedicineScreen };
