/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Home from './home';

export default StackNavigator(
    {
        Screen1: {
            screen: Home,
            navigationOptions: {
                headerTitle: "首页"
            }
        },
    },
    // {
    //     cardStyle: { paddingTop: StatusBar.currentHeight } // to bring the navigation bar hiding from the staus bar
    // }
);




