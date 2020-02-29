import React, { Component } from 'react';
import { View, Image } from 'react-native';


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

























// import React, { Component } from 'react';
// import { View, Text, ScrollView, Image } from 'react-native';
// import { Card } from 'react-native-elements';
// import { MENUS } from '../shared/menus';
// import { PROMOTIONS } from '../shared/promotions';
// import { PARTNERS } from '../shared/partners';
// import { DISHES } from '../shared/dishes';

// function RenderItem({item}) {
//     if (item) {
//         return (
//             <Card
//                 featuredTitle={item.name}
//                 image={require('./images/joshua-rodriguez-f7zm5TDOi4g-unsplash.jpg')}>
//                 <Text
//                     style={{margin: 10}}>
//                     {item.description}
//                 </Text>
//             </Card>
//         );
//     }
//     return <View />;
// }

// class Home extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             menus: MENUS,
//             dishes: DISHES,
//             promotions: PROMOTIONS,
//             partners: PARTNERS
//         };
//     }

//     static navigationOptions = {
//         title: 'Home'
//     }

//     render() {
//         return (      
//             <ScrollView>                
//                 <Image 
//                 style={{width: '100%', height: '35%'}}
//                 source={require('./images/saladbowl.jpg')}
//                 />
//                 <RenderItem 
//                     item={this.state.menus.filter(menu => menu.featured)[0]} />
//                 <RenderItem 
//                     item={this.state.dishes.filter(dish => dish.featured)[0]} />
//                 <RenderItem 
//                     item={this.state.promotions.filter(promotion => promotion.featured)[0]} />
//                 {/* <RenderItem 
//                     item={this.state.partners.filter(partner => partner.featured)[0]} /> */}
//             </ScrollView>            
          
//         );
//     }
// }

// export default Home;