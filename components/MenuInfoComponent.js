import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

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

function MenuInfo(props) {
    return <RenderMenu menu={props.menu} />;
}

export default MenuInfo;