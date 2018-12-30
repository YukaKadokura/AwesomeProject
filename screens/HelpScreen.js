import React from 'react';
import {
    View
} from 'react-native';
import LotsOfGreetings from '../components/Greeting';

export default class HelpScreen extends React.Component{
    static navigationOptions = {
        title: 'ヘルプ',
    }
    render(){
        return(
            <View>
                <LotsOfGreetings />
            </View>
        );
    }
}