import React, { Component } from 'react';
import { View, Image, Button, Text } from 'react-native';
// import { Card } from 'react-native-elements';


class Home extends Component {

    static navigationOptions = {
        title: 'Healthy Steps Cafe'
    }

    render() {
        return(
            <View>
                <Image 
                style={{width: '100%', height: '85%'}}
                source={require('./images/saladbowl.jpg')}
                />                
            </View>
        );
    }
}

export default Home;