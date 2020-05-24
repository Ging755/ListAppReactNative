import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { inject } from "mobx-react";

@inject(stores => ({
    taskStore: stores.rootStore.taskStore
}))
class Main extends Component {

    render() {
        return (
            <View>
                <Text>
                    Welcome to main Screen
                </Text>
            </View>
        );
    }
}

export default Main;