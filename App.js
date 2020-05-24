import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from "mobx-react";
import Navigator from './navigation/navigator'

import RootStore from './core/rootStore';

export default function App() {  
  const rootStore = new RootStore();
  return (
    <Provider rootStore={rootStore}>
      <NavigationContainer>
        <Navigator></Navigator>
      </NavigationContainer>
    </Provider>
  );
}
