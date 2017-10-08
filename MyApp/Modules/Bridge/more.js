import React from "react";
import { StyleSheet, Text, View,Button, Image } from "react-native";
import Platform from './Platform'
import Communication from './Communication'

const tabBarIconUrl = '../../images/pig.png';
export default class More extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        title: '原生API桥接',
        tabBarLabel: '桥接',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../../images/pig.png')}
                style={[{height:30,width:30}, {tintColor: tintColor}]}
            />
        ),
    });

    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.text}>{Platform.systemName}</Text>
                <Communication></Communication>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    text: {
        alignSelf:'center'
    }

})
