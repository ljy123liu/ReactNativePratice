/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StackNavigator,TabBarBottom, TabNavigator } from 'react-navigation';
import Home from './Modules/Home/home';
import Detail from './Modules/Home/detail';
import User from './Modules/User/user';
import More from './Modules/Bridge/more';
// import Home from './home';

// 通过TabNavigator做路由映射
const MainScreentNavigator=TabNavigator({
    HomeVC:{screen:Home},
    UserVC:{screen:User},
    MoreVC:{screen:More}
}, {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
        activeTintColor: '#e91e63',
        labelStyle: {
            fontSize: 12,
        },
        style: {
            backgroundColor: 'white',
        },
    },

});

//引入要用到的跳转页面
const  MyNavigatior = StackNavigator({
    Main:{screen:MainScreentNavigator},
    DetailVC:{screen:Detail},
});

export default MyNavigatior





