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
    TouchableHighlight,
    Dimensions
} from 'react-native';

//创建ListView.DataSource数据源
const  ds = new ListView.DataSource({
    rowHasChanged:(r1,r2) => r1 !== r2
});

export default class App extends Component {
    //生命周期 constructor -> componentWillMount -> render -> componentDidMount -> componentWillUnmount
    //构造函数
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 0,
            dataSource: ds.cloneWithRows([
                '商品1',
                '商品2',
                '商品3',
                '商品4',
                '商品5',
                '商品6',
                '商品7',
                '商品8',
                '商品9',
                '商品10',
            ])
        };
    }

    componentWillMount() {

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.searchBar}>
                    <TextInput style={styles.input} placeholder='搜索商品'></TextInput>
                    <Button style={styles.button} title='搜索' onPress={this.click}></Button>
                </View>
                <View style={styles.advertisement}>
                    <ScrollView ref='scrollView' horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={true}>
                        <Text style={{width:Dimensions.get('window').width,height:180,backgroundColor:'gray'}}>
                            商品1
                        </Text>
                        <Text style={{width:Dimensions.get('window').width,height:180,backgroundColor:'red'}}>
                            商品2
                        </Text>
                        <Text style={{width:Dimensions.get('window').width,height:180,backgroundColor:'yellow'}}>
                            商品3
                        </Text>
                    </ScrollView>
                </View>
                <View style={styles.products}>
                    <ListView dataSource={this.state.dataSource} renderRow={this._renderRow} />
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
                    <Text>{rowData}</Text>
                </View>
            </TouchableHighlight>
        );
    }

    click() {
        alert('搜索')
    }

    listViewClick() {
        alert('点击列表')
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchBar: {
        //iOS显示区域从屏幕顶部开始，Android顶部从状态栏下方开始
        marginTop: Platform.OS === 'ios' ? 20 : 0,
        height: 40,
        flexDirection: 'row'
    },
    input: {
        flex: 1,
        borderColor: 'gray',
        borderWidth: 2
    },
    button: {
      flex: 1
    },
    advertisement: {
        height: 180,

    },
    products: {
        flex: 1,
    },
    row: {
        height: 60,
        justifyContent:'center',
        alignItems:'center'
    }
});
