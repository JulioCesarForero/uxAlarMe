import { useState } from 'react';
import { Text, View } from 'react-native';
import { FAB } from 'react-native-paper';
import { globalStyles } from '../theme/global.styless';
import Icon from 'react-native-vector-icons/MaterialIcons';


export const CounterM3Screen = () => {

  const [ count, setCount ] = useState( 10 );

  return (
    <View style={ globalStyles.centerContainer }>
      <Text style={ globalStyles.title }>{ count }</Text>

      <Icon name="home" size={ 35 } />


      <FAB
        onPress={ () => setCount( count + 1 ) }
        onLongPress={ () => setCount( 0 ) }
        style={ globalStyles.fab }
        // label="+1"
        icon="add"
        // icon={ () => <Icon name="accessibility-outline" size={25 } /> }
      />

    </View>
  );
};

