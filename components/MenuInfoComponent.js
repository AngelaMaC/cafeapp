import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { MENUS } from '../shared/menus';
import { REVIEWS } from '../shared/reviews'

function RenderMenu({menu}) {   
    
    if (menu) {
        return (
            <Card
                featuredTitle={menu.name}
                image={require('./images/ella-olsson-2IxTgsgFi-s-unsplash.jpg')}>
                <Text style={{margin: 10}}>
                    {menu.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

function RenderReviews({reviews}) {

    const renderReviewItem = ({item}) => {
        return (
            <View style={{margin: 5}}>
                <Card 
                image={item.image}>                
                <Icon                    
                    name='heart-o'
                    type='font-awesome'
                    color='#f50'
                    size={10}
                    raised
                    reverse
                    />                
                <Text style={{fontSize: 14, fontWeight: 'bold'}}>{item.title}</Text>
                <Text style={{fontSize: 12}}>{item.description}</Text>
                <Text style={{fontSize: 11, fontStyle:'italic'}}>Allergen: {item.allergy}</Text></Card>
               
            </View>
        );
    };

    return (
        <Card title='Menu Items'>
            <FlatList
                data={reviews}
                renderItem={renderReviewItem}
                keyExtractor={item => item.id.toString()}
            />
        </Card>
    )
}

class MenuInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menus: MENUS,
            reviews: REVIEWS,
            // favorite: false
        };
    }

    // markFavorite() {
    //     this.setState({favorite: true});
    // }

    static navigationOptions = {
        title: 'Menu Information'
    }

    render() {
        const menuId = this.props.navigation.getParam('menuId');
        const menu = this.state.menus.filter(menu => menu.id === menuId)[0];
        const reviews = this.state.reviews.filter(review => review.menuId === menuId);
        return (
            <ScrollView>
                <RenderMenu menu={menu}
                    // favorite={this.state.favorite}
                    // markFavorite={() => this.markFavorite()}
                />
                <RenderReviews reviews={reviews} />
            </ScrollView>
        );
    }
}

export default MenuInfo;