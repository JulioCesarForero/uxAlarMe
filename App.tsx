import { SafeAreaView } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { HelloWorldScreen } from './src/presentation/screens/HelloWorldScreen';
import { CounterScreen } from './src/presentation/screens/CounterScreen';
import { CounterM3Screen } from './src/presentation/screens/CounterM3Screen';
import { BoxObjectModelScreen } from './src/presentation/screens/BoxObjectModelScreen';
import { DimensionScreen } from './src/presentation/screens/DimensionScreen';

import { PositionScreen } from './src/presentation/screens/PositionScreen';
import { FlexScreen } from './src/presentation/screens/FlexScreen';
import { FlexDirectionScreen } from './src/presentation/screens/FlexDirectionScreen';
import LoginScreen from './src/presentation/screens/LoginScreen';
import AlarmListScreen from './src/presentation/screens/AlarmListScreen';
import AlarmCreateScreen from './src/presentation/screens/AlarmCreateScreen';
import ConfigScreen from './src/presentation/screens/ConfigScreen';


export const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: (props) => <MaterialIcons { ...props } />
      }}
    >
      <SafeAreaView style={{ flex: 1}}>
        {/* <HelloWorldScreen name='Fernando Herrera' /> */}
        {/* <CounterScreen /> */}
        {/* <CounterM3Screen /> */}
        {/* <BoxObjectModelScreen /> */}
        {/* <DimensionScreen /> */}
        {/* <PositionScreen /> */}
        {/* <FlexScreen /> */}
        {/* <FlexDirectionScreen /> */}
        
        <LoginScreen navigation={undefined} />
        {/* <AlarmListScreen /> */}
        {/* <AlarmCreateScreen /> */}
        {/* <ConfigScreen /> */}

      </SafeAreaView>
    </PaperProvider>
  )
}