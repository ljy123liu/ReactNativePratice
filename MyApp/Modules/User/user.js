import React from "react";
import Swiper from "react-native-swiper"
import { StyleSheet, Text, View,Button, Image,TouchableHighlight,ActivityIndicator,Dimensions } from "react-native";

const tabBarIconUrl = '../../images/pig.png';
export default class User extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        title: '个人中心',
        tabBarLabel: '我的',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../../images/pig.png')}
                style={[{height:30,width:30}, {tintColor: tintColor}]}
            />
        ),
    });

    render() {

        return (
            <View>
                <Text>1234567890</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    advertisement: {
        height: 180,
        width: Dimensions.get('window').width
    },
    tabText: {

    }
})
