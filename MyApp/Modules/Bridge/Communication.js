import React from "react";
import { StyleSheet, Text, View,Button, Image,Alert,NativeModules } from "react-native";

export default class More extends React.Component {

    render() {

        return (
            <View style={styles.container}>
                <Button title='调用原生组件' onPress={()=>{
                    NativeModules.Communication.presentViewControllerFromReactNative('RN传递参数')
                }}></Button>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container:{
        alignSelf:'center',
        flexDirection:'row'
    },

})
