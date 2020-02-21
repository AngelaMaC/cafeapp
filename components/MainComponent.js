import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import Home from './HomeComponent';
import Directory from './DirectoryComponent';
import MenuInfo from './MenuInfoComponent';
console.disableYellowBox = true;

const DirectoryNavigator = createStackNavigator(
    {
        Directory: { screen: Directory },
        MenuInfo: { screen: MenuInfo }
    }, 
    {
        initialRouteName: 'Directory',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#336B37'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#336B37'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator },
        Directory: { screen: DirectoryNavigator }
    },
    {
        drawerBackgroundColor: '#dee7df'
    }
);

class Main extends Component {
    render() {
        return (
            <View style={{
                flex: 1, 
                paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
            }}>
                <MainNavigator />
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