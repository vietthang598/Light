import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
//screen
import Welcome from './screen/light2';


export default function App() {
  return (
    <SafeAreaProvider>
      <Welcome />
    </SafeAreaProvider>
  );
}
