import React, { Component } from 'react';
import { View } from 'react-native';
import Directory from './DirectoryComponent';
import { MENUS } from '../shared/menus';
import MenuInfo from './MenuInfoComponent';
console.disableYellowBox = true;


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menus: MENUS,
            selectedMenu: null
        };
    }

    onMenuSelect(menuId) {
        this.setState({selectedMenu: menuId});
    }

    render() {
        return (
            <View style={{flex: 1}}>                
                <Directory menus={this.state.menus} onPress={menuId => this.onMenuSelect(menuId)} />        
                <MenuInfo menu={this.state.menus.filter(menu => menu.id === this.state.selectedMenu)[0]} />
            </View>
        );
    }
}

export default Main;


// import React, { Component } from 'react';
// import { View, Image } from 'react-native';


// class Main extends Component {
    
//     render() {
//         return(
//             <View>
//                 <Image 
//                 style={{width: '100%', height: '85%'}}
//                 source={require('../components/images/saladbowl.jpg')}
//                 />
//             </View>
//         );
//     }
// }

// export default Main;