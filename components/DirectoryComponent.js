import React, { Component } from 'react';
import { FlatList, View, Image } from 'react-native';
import { ListItem } from 'react-native-elements';
import { MENUS } from '../shared/menus';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menus: MENUS
        };
    }

    static navigationOptions = {
        title: 'HealthySteps Cafe | Menus'
    };

    render() {
        const { navigate } = this.props.navigation;
        const renderDirectoryItem = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    onPress={() => navigate('MenuInfo', { menuId: item.id})}
                    leftAvatar={{ source: item.image}}
                />
            );
        };

        return (
            <View>
                <Image 
                    style={{width: '100%', height: '45%'}}
                    source={require('./images/toa-heftiba-6bKpHAun4d8-unsplash.jpg')}
                    />
            <FlatList 
                data={this.state.menus}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
            </View>
        );
    }
}

export default Directory;