import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from "mobx-react";
import Navigator from './navigation/navigator'

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Navigator></Navigator>
      </NavigationContainer>
    </Provider>
  );
}
