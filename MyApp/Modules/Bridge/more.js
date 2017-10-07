import React from "react";
import { StyleSheet, Text, View,Button, Image } from "react-native";
import Platform from './Platform'

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
                <Text>{Platform.systemName}</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
})
