import React, { Component } from 'react';
import { ScrollView, Text, FlatList } from 'react-native';
import { Card, ListItem } from 'react-native-elements';


function Mission() {   
    
        return (
            <Card 
                title="Our HealthySteps Philosophy"
                image={require('../components/images/the-creative-exchange-d1ngW7SNehM-unsplash.jpg')} >
                <Text>
                We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness. We increase access to adventure for the public while promoting safe and respectful use of resources. The expert wilderness trekkers on our staff personally verify each campsite to make sure that they are up to our standards. We also present a platform for campers to share reviews on campsites they have visited with each other.
                </Text>
            </Card>
        );
}

class About extends Component  {

    //     constructor(props) {
    //     super(props);
    //     this.state = {
    //         partners: PARTNERS
    //     };
    // }

    static navigationOptions = {
        title: 'About Us'
    }


renderPartner = ({item}) => {
            return (
                <ListItem
                    // title={item.name}
                    // subtitle={item.description}
                    // leftAvatar={{ source: require('../images/cafe-img-1')}}
                >
                </ListItem>
            );
        }
        
    render() {
        return (
            <ScrollView>
                <Mission />
                <Card title='Community Partners'>
                    {/* <FlatList
                    data={this.state.partners}
                    renderItem={this.renderPartner}
                    keyExtractor={item => item.id.toString()}
                    /> */}
                </Card>
            </ScrollView>
        );
        
    }
}


export default About;