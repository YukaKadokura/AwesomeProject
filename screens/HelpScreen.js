import React from 'react';
import {
    View
} from 'react-native';
import LotsOfGreetings from '../components/Greeting';
import AsyncStorageExample from '../components/AsyncStorageExample';

export default class HelpScreen extends React.Component{
    static navigationOptions = {
        title: 'ヘルプ',
    }
    render(){
        return(
            <AsyncStorageExample />
        );
    }
}