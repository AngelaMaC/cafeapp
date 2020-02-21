import React, { Component } from 'react';
import { FlatList } from 'react-native';
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
        title: 'Directory'
    };

    render() {
        const { navigate } = this.props.navigation;
        const renderDirectoryItem = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    onPress={() => navigate('MenuInfo', { menuId: item.id})}
                    leftAvatar={{ source: require('../components/images/saladbowl.jpg')}}
                />
            );
        };

        return (
            <FlatList 
                data={this.state.menus}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default Directory;