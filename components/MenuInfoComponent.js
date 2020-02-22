import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import { MENUS } from '../shared/menus';
import { REVIEWS } from '../shared/reviews'

function RenderMenu({menu}) {   
    if (menu) {
        return (
            <Card
                featuredTitle={menu.name}
                image={require('./images/saladbowl.jpg')}>
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
            <View style={{margin: 10}}>
                <Text style={{fontSize: 14}}>{item.text}</Text>
                <Text style={{fontSize: 12}}>{item.rating} Stars</Text>
                <Text style={{fontSize: 12}}>{`-- ${item.author}, ${item.date}`}</Text>
            </View>
        );
    };

    return (
        <Card title='Reviews'>
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
            reviews: REVIEWS
        };
    }

    static navigationOptions = {
        title: 'Menu Information'
    }

    render() {
        const menuId = this.props.navigation.getParam('menuId');
        const menu = this.state.menus.filter(menu => menu.id === menuId)[0];
        const reviews = this.state.reviews.filter(review => review.menuId === menuId);
        return (
            <ScrollView>
                <RenderMenu menu={menu} />
                <RenderReviews reviews={reviews} />
            </ScrollView>
        );
    }
}

export default MenuInfo;