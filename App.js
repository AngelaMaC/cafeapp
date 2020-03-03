import React from 'react';
import Main from './components/MainComponent';

export default function App() {
    return (
        <Main />
    );
}

// import React, { Component } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

// class HomeScreen extends Component {
//     render() {
//         return (
//             <View style={StyleSheet.container}>
//                 <Text>Tab Navigator Experiment</Text>
//             </View>
//         );
//     }
// }
// class MenuScreen extends Component {
//     render() {
//         return (
//             <View style={StyleSheet.container}>
//                 <Text>Tab Navigator Experiment</Text>
//             </View>
//         );
//     }
// }

// export default createMaterialBottomTabNavigator({
//     Home: { screen: HomeScreen},
//     Menus: {screen: MenuScreen}
// });

// const styles = StyleSheet.create({
//     container: {
//         flex:1,
//         alignItems: 'center',
//         justifyContent: 'center',
//     }
// });