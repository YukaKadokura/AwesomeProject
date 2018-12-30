import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';

export default class HelpScreen extends React.Component{
    static navigationOptions = {
        title: 'ヘルプ',
    }
    render(){
        return(
            <View>
                <Text>HelloWorld!</Text>
            </View>
        );
    }
}