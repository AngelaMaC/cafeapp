import React, { Component } from 'react';
import {ScrollView, Text } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import * as MailComposer from 'expo-mail-composer';


class Contact extends Component {

    static navigationOptions = {
        title: 'Contact Us'
    };

    sendMail() {
        MailComposer.composeAsync({
            recipients: ['info@healthystepscafe.com'],
            subject: 'Inquiry',
            body: 'To whom it may concern:'
        });
    }

    render() {

        return (
            <ScrollView>
                <Animatable.View animation='fadeInDown' duration={500} delay={50}>
                    <Card title="Contact Information" 
                    image={require('../components/images/cafe-img-1.jpg'
                    )}
                    wrapperStyle={{margin: 10}}>
                    <Text >1601 Rice Boulevard</Text>
                    <Text >Houston, TX 77005 </Text>
                    <Text style={{marginBottom: 10}}>U.S.A. </Text>
                    <Text>Phone: 1-832-555-1234 </Text>
                    <Text>Email: info@healthystepscafe.com</Text>
                        <Button
                            title="Send Email"
                            buttonStyle={{backgroundColor: '#ECAC63', margin: 40}}
                            icon={<Icon
                                name='envelope-o'
                                type='font-awesome'
                                color='#fff'
                                iconStyle={{marginRight: 10}}
                            />}
                            onPress={() => this.sendMail()}
                        />
                    </Card>
                </Animatable.View>
            </ScrollView>
        );
    }
}

export default Contact;




// import React, { Component } from 'react';
// import {ScrollView, Text, ImageBackground } from 'react-native';
// import { Card } from 'react-native-elements';


// class Contact extends Component {

//     static navigationOptions = {
//         title: 'Contact Us'
//     };

//     render() {

//         return (
//             <ScrollView>
//                 <Card 
//                     title="Contact Information" 
//                     image={require('../components/images/cafe-img-1.jpg'
//                     )}
//                     wrapperStyle={{margin: 10}}>
//                     <Text >1601 Rice Boulevard</Text>
//                     <Text >Houston, TX 77005 </Text>
//                     <Text style={{marginBottom: 10}}>U.S.A. </Text>
//                     <Text>Phone: 1-832-555-1234 </Text>
//                     <Text>Email: info@healthystepscafe.com</Text>
//                 </Card>
//             </ScrollView>
//         );
//     }
// }

// export default Contact;
