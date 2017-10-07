/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Home from './Modules/Home/home';
import Detail from './Modules/Home/detail';
// import Home from './home';

export default StackNavigator(
    {
        Screen1: {
            screen: Home,
        },
        Screen2: {
            screen: Detail,
        },
    },
    {
        // mode: 'modal',

    }


    // {
    //     cardStyle: { paddingTop: StatusBar.currentHeight } // to bring the navigation bar hiding from the staus bar
    // }
);




