import React, { Component } from 'react';
import {ScrollView, Text, ImageBackground } from 'react-native';
import { Card } from 'react-native-elements';


class Contact extends Component {

    static navigationOptions = {
        title: 'Contact Us'
    };

    render() {

        return (
            <ScrollView>
                <Card 
                    title="Contact Information" 
                    image={require('../components/images/cafe-img-1.jpg'
                    )}
                    wrapperStyle={{margin: 10}}>
                    <Text >1601 Rice Boulevard</Text>
                    <Text >Houston, TX 77005 </Text>
                    <Text style={{marginBottom: 10}}>U.S.A. </Text>
                    <Text>Phone: 1-832-555-1234 </Text>
                    <Text>Email: info@healthystepscafe.com</Text>
                </Card>
            </ScrollView>
        );
    }
}

export default Contact;
