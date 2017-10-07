/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    ScrollView,
    Platform,
    ListView,
    Image,
    TouchableHighlight,
    RefreshControl,
    Dimensions,
} from 'react-native';

//创建ListView.DataSource数据源
const  ds = new ListView.DataSource({
    rowHasChanged:(r1,r2) => r1 !== r2
});

//指示器样式
const circleSize = 8;
const circleMargin = 5;

export default class Home extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: '首页',
    });

    //生命周期 constructor -> componentWillMount -> render -> componentDidMount -> componentWillUnmount
    //构造函数
    constructor(props) {
        super(props);
        this.state = {
            isRefreshing: false,
            currentPage: 0,
            searchText: '',
            dataSource: ds.cloneWithRows([
                {image: require('../../images/pig.png'),title:'商品1',subTitle:'描述1'},
                {image: require('../../images/pig.png'),title:'商品2',subTitle:'描述2'},
                {image: require('../../images/pig.png'),title:'商品3',subTitle:'描述3'},
                {image: require('../../images/pig.png'),title:'商品4',subTitle:'描述4'},
                {image: require('../../images/pig.png'),title:'商品5',subTitle:'描述5'},
                {image: require('../../images/pig.png'),title:'商品6',subTitle:'描述6'},
                {image: require('../../images/pig.png'),title:'商品7',subTitle:'描述7'},
                {image: require('../../images/pig.png'),title:'商品8',subTitle:'描述8'},
                {image: require('../../images/pig.png'),title:'商品9',subTitle:'描述9'},
            ]),
            advertisements: [
                {title:'广告1',backgroundColor:'gray',url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507226069759&di=851adcf8a30dfe9e746776d11efd554b&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F14%2F87%2F22%2F40858PIC4AX_1024.jpg'},
                {title:'广告2',backgroundColor:'yellow',url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507226069759&di=851adcf8a30dfe9e746776d11efd554b&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F14%2F87%2F22%2F40858PIC4AX_1024.jpg'},
                {title:'广告3',backgroundColor:'red',url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507226069759&di=851adcf8a30dfe9e746776d11efd554b&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F14%2F87%2F22%2F40858PIC4AX_1024.jpg'},
            ]
        };
    }

    componentWillMount() {

    }

    render() {
        //指示器个数
        const adCount = this.state.advertisements.length;
        //指示器宽度
        const indicatorWidth = circleSize * adCount +circleMargin * adCount * 2;
        //指示器左边坐标
        const indicatorLeft = (Dimensions.get('window').width - indicatorWidth) / 2;
        //导航器
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <View style={styles.searchBar}>
                    <TextInput style={styles.input} placeholder='搜索商品' onChangeText={(text)=>this.changeText(text)}></TextInput>
                    <Button style={styles.button}
                            title='搜索'
                            onPress={this.handleNavigation}></Button>
                </View>
                <View style={styles.advertisement}>
                    <ScrollView ref='scrollView' horizontal={true} showsHorizontalScrollIndicator={false}
                                pagingEnabled={true}>
                        {this.state.advertisements.map((advertisement, index) => {
                            return (
                                <TouchableHighlight key={index} onPress={this.bannerClick}>
                                    <Image style={styles.advertisement} source={{uri:advertisement.url}}></Image>
                                </TouchableHighlight>
                            )
                        })}
                    </ScrollView>

                    <View style={[styles.indicator,{left:indicatorLeft}]}>{this.state.advertisements.map((ad,index)=>{
                        return (<View key={index} style={(index === this.state.currentPage) ? styles.circleSelected : styles.circle} />
                        )})}
                    </View>

                </View>
                <View style={styles.products}>
                    <ListView dataSource={this.state.dataSource}
                              renderRow={this._renderRow}
                              renderSeparator={this._renderSeperator}
                              refreshControl={this._renderRefreshControl()}/>
                </View>

            </View>
        );
    }

    componentDidMount() {
        this._startTimer();
    }

    componentWillUnmount() {
        //销毁定时器
        clearInterval(this.interval)
    }

    handleNavigation = () => {
        this.props.navigation.navigate("Screen2", { user: 'Lucy' });
    };

    _startTimer() {

        //使用setInterval创建定时器
        this.interval = setInterval(() => {

            var nextPage = this.state.currentPage + 1;
            if (nextPage >= 3) {
                nextPage = 0;
            }
            //更新this.state中的currentPage值
            this.setState({
                currentPage: nextPage
            });
            const offSetX = nextPage * Dimensions.get('window').width;
            this.refs.scrollView.scrollResponderScrollTo({
                x: offSetX,
                y: 0,
                animated: true
            });
        }, 2000)
    }

    _renderRow = (rowData, sectionID, rowID) => {
        return (
            <TouchableHighlight onPress={this.listViewClick}>
                <View style={styles.row}>
                    <Image source={rowData.image} style={styles.productImage}/>
                    <View style={styles.productText}>
                        <Text style={styles.productTitle}>{rowData.title}</Text>
                        <Text style={styles.productSubTitle}>{rowData.subTitle}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }

    _renderSeperator = () => {
        return (
            <View key={'1'} style={styles.divider}></View>
        );
    }

    _renderRefreshControl = () => {
        return (
            <RefreshControl refreshing={this.state.isRefreshing}
                            onRefresh={this._onRefresh}
                            tintColor={'#FF0000'}
                            title={'正在刷新数据，请稍后...'}
                            titleColor={'#0000FF'}></RefreshControl>
        );
    }
    _onRefresh = () => {
        this.setState({
            isRefreshing:true
        })

        setTimeout(() => {
            const products = Array.from(new Array(10)).map((value,index)=> ({
                image: require('../../images/pig.png'),
                title: '新商品'+index,
                subTitle:'新商品描述'+index
            }));
            this.setState({
                isRefreshing: false,
                dataSource:ds.cloneWithRows(products)
            })
        }, 2000)
    }

    click() {
        alert('搜索1')
    }

    bannerClick(data) {
        alert(data.title)
    }

    listViewClick() {
        alert('点击列表')
        this.handleNavigation
    }

    changeText(text) {
        if (text === '1234'){
            alert(text)
        }
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchBar: {
        //iOS显示区域从屏幕顶部开始，Android顶部从状态栏下方开始
        // marginTop: Platform.OS === 'ios' ? 20 : 0,
        height: 40,
        flexDirection: 'row'
    },
    input: {
        flex: 1,
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 5
    },
    button: {
        flex: 1
    },
    //轮播图
    advertisement: {
        height: 180,
        width: Dimensions.get('window').width
    },
    //指示器
    indicator: {
        position: 'absolute',
        top: 160,
        flexDirection: 'row',
    },
    circle: {
        width: circleSize,
        height: circleSize,
        borderRadius: circleSize / 2,
        backgroundColor: 'gray',
        marginHorizontal: circleMargin
    },
    circleSelected: {
        width: circleSize,
        height: circleSize,
        borderRadius: circleSize / 2,
        backgroundColor: 'white',
        marginHorizontal: circleMargin
    },
    products: {
        flex: 1,
    },
    productImage: {
        marginLeft: 10,
        width: 40,
        height: 40,
        alignSelf:'center'
    },
    row: {
        height: 60,
        flexDirection:'row',
        // alignItems:'center'
    },
    productText: {
        flex:1,
        marginTop:10,
        marginBottom:10,
        marginLeft:10
    },
    productTitle: {
        flex:3,
        fontSize:16
    },
    productSubTitle: {
        flex:2,
        fontSize:14,
        color:'gray'
    },
    divider: {
        height:1,
        width:Dimensions.get('window').width-5,
        marginLeft:5,
        backgroundColor:'lightgray'
    }


});
