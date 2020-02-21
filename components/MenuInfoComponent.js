import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { MENUS } from '../shared/menus';

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

class MenuInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menus: MENUS
        };
    }

    static navigationOptions = {
        title: 'Menu Information'
    }

    render() {
        const menuId = this.props.navigation.getParam('menuId');
        const menu = this.state.menus.filter(menu => menu.id === menuId)[0];
        return <RenderMenu menu={menu} />;
    }
}

export default MenuInfo;