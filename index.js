/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { App } from './App'; 
import {name as appName} from './app.json';
import { registerRootComponent } from 'expo';
import {PaperProvider } from 'react-native-paper';


export default function Main() {
    return (
      <PaperProvider>
        <App />
      </PaperProvider>
    );
  }

AppRegistry.registerComponent(appName, () => Main);
registerRootComponent(Main);
