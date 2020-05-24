import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Main from '../application/screens/main/main'

const Stack = createStackNavigator();

class Navigator extends Component {
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Main}
                    options={{ title: 'Welcome' }}
                />
            </Stack.Navigator>
        );
    }
}

export default Navigator;