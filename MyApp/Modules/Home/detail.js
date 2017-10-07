import React from "react";
import Swiper from "react-native-swiper"
import { StyleSheet, Text, View,Button, Image,TouchableHighlight,ActivityIndicator,Dimensions } from "react-native";

export default class Detail extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        title: `Chat with ${navigation.state.params.user}`,
    });

    constructor(props) {
        super(props);
        this.state = {

            advertisements: [
                {title:'广告1',backgroundColor:'gray',url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507226069759&di=851adcf8a30dfe9e746776d11efd554b&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F14%2F87%2F22%2F40858PIC4AX_1024.jpg'},
                {title:'广告2',backgroundColor:'yellow',url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507226069759&di=851adcf8a30dfe9e746776d11efd554b&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F14%2F87%2F22%2F40858PIC4AX_1024.jpg'},
                {title:'广告3',backgroundColor:'red',url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507226069759&di=851adcf8a30dfe9e746776d11efd554b&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F14%2F87%2F22%2F40858PIC4AX_1024.jpg'},
            ]
        };
    }

    render() {

        const { params } = this.props.navigation.state;

        return (
            <View>
                <View style={styles.advertisement}>
                    <Swiper loop={true} autoplay={true}>
                        {this.state.advertisements.map((advertisement, index) => {
                            return (
                                <TouchableHighlight key={index} onPress={this.bannerClick}>
                                    <Image style={styles.advertisement} source={{uri:advertisement.url}}></Image>
                                </TouchableHighlight>
                            )
                        })}
                    </Swiper>
                </View>
                <Text>Chat with {params.user}</Text>
                <Button onPress={this.back} title='返回'></Button>
                <ActivityIndicator color='pink' size='large'></ActivityIndicator>
            </View>
        );
    }

    back= () => {
        this.props.navigation.goBack()
        this.props.navigation.state.params.callback('回调参数');
    }
}

const styles = StyleSheet.create({
    advertisement: {
        height: 180,
        width: Dimensions.get('window').width
    },
})
