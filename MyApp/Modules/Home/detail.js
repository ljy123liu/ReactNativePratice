import React from "react";
import { StyleSheet, Text, View,Button, TouchableHighlight } from "react-native";

export default class Detail extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        title: `Chat with ${navigation.state.params.user}`,
        // headerMode:'none'
    });

    render() {

        const { params } = this.props.navigation.state;

        return (
            <View>
                <Text>Chat with {params.user}</Text>
                <Button onPress={this.back} title='返回'></Button>
            </View>
        );
    }

    back= () => {
        this.props.navigation.goBack()
    }
}
