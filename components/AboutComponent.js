// import React, { Component } from 'react';
// import { ScrollView, Text, FlatList } from 'react-native';
// import { Card, ListItem } from 'react-native-elements';
// import PARTNERS from '../shared/partners';


// function Mission() {   
    
//         return (
//             <Card 
//                 title="Our HealthySteps Philosophy"
//                 image={require('../components/images/the-creative-exchange-d1ngW7SNehM-unsplash.jpg')} >
//                 <Text>
//                 We are more than just a cafe. We are friends and family uniting together to make our community a better place. Providing a centeral hub for nourishment is just one of our priorities in life. Connecting people in the community is our close second. See our community partners below for how you can join in making our community stronger together.
//                 </Text>
//             </Card>
//         );
// }

// class About extends Component  {

//         constructor(props) {
//         super(props);
//         this.state = {
//             partners: PARTNERS
//         };
//     }

//     static navigationOptions = {
//         title: 'About Us'
//     }


// renderPartner = ({item}) => {
//         return (
//             <ListItem
//                 title={item.name}
//                 subtitle={item.description}
//                 leftAvatar={item.image}
//             >
//             </ListItem>
//         );
//     }

//     render() {        
//         return (
//             <ScrollView>
//                 <Mission />
//                 <Card title='Community Partners'>
//                     <FlatList
//                     data={this.state.partners}
//                     renderItem={this.renderPartner}
//                     keyExtractor={item => item.id.toString()}
//                     />
//                 </Card>
//             </ScrollView>
//         );
        
//     }
// }


// export default About;

import React, { Component } from 'react';
import { ScrollView, Text, FlatList } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { PARTNERS } from '../shared/partners';

function Mission() {   
    
        return (
            <Card 
                title="Our HealthySteps Philosophy"
                image={require('../components/images/the-creative-exchange-d1ngW7SNehM-unsplash.jpg')} >
                <Text>
                We are more than just a cafe. We are friends and family uniting together to make our community a better place. Providing a centeral hub for nourishment is just one of our priorities in life. Connecting people in the community is our close second. See our community partners below for how you can join in making our community stronger together.
                </Text>
            </Card>
        );
}

class About extends Component  {

        constructor(props) {
        super(props);
        this.state = {
            partners: PARTNERS
        };
    }

    static navigationOptions = {
        title: 'About Us'
    }


renderPartner = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    leftAvatar={{source: require('../components/images/chanan-greenblatt-7FAhq93_Ir8-unsplash.jpg')}}
                >
                </ListItem>
            );
        }
        
    render() {
        return (
            <ScrollView>
                <Mission />
                <Card title='Community Partners'>
                    <FlatList
                    data={this.state.partners}
                    renderItem={this.renderPartner}
                    keyExtractor={item => item.id.toString()}
                    />
                </Card>
            </ScrollView>
        );
        
    }
}


export default About;