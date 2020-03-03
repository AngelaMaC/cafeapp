import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { MENUS } from '../shared/menus';
import { DISHES } from '../shared/dishes'

function RenderMenu(menu) { 
    if (menu) {
        return (
            <Card
                featuredTitle={menu.menu.name}
                image={menu.menu.image}>
                <Text style={{margin: 10, textAlign: 'center'}}>
                    {/* {menu.menu.description} */}
                    From our famous cinnamon rolls to savory breakfast burritos and tofu scramble, you'll be sure to find your breakfast faves right here
                </Text>
            </Card>
        );
    }
    return <View />;
}

function RenderDishes({dishes}) {

    // const {reviews} = props;

    const renderDishItem = ({item}) => {
        return (
            <View style={{margin: 5}}>
                <Card 
                image={item.image}
                featuredTitle={item.name}>                
                <Icon                    
                    name='heart-o'
                    // name={props.favorite ? 'heart' : 'heart-o'}
                    type='font-awesome'
                    color='#f50'
                    size={10}
                    raised
                    reverse
                    // onPress={() => props.favorite ?
                    //     console.log('Already set as a favorite') : props.markFavorite()}
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
                data={dishes}
                renderItem={renderDishItem}
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
            dishes: DISHES,
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
        const dishes = this.state.dishes.filter(dish => dish.menuId === menuId);
        return (
            <ScrollView>
                <RenderMenu menu={menu}
                    // favorite={this.state.favorite}
                    // markFavorite={() => this.markFavorite()}
                />
                <RenderDishes dishes={dishes} />
            </ScrollView>
        );
    }
}

export default MenuInfo;