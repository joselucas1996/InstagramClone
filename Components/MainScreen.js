import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

import { createBottomTabNavigator } from 'react-navigation';
import { Icon} from 'native-base';

import HomeTabScreen from './AppTabNavigator/HomeTabScreen';
import SearchTabScreen from './AppTabNavigator/SearchTabScreen';
import AddMediaTabScreen from './AppTabNavigator/AddMediaTabScreen';
import LikesTabScreen from './AppTabNavigator/LikesTabScreen';
import ProfileTabScreen from './AppTabNavigator/ProfileTabScreen';

class MainScreen extends React.Component {
    static navigationOptions = {
        headerLeft: <Icon name = "ios-camera-outline"
            style={{paddingLeft:10, }}
        />,
        title: "Instagram",
        headerRight:<Icon name="ios-send-outline"
            style={{paddingRight:10}}
        />
    }
  render() {
    return (
      <AppcreateBottomTabNavigator/>
    );
  }
}

export default MainScreen;

const AppcreateBottomTabNavigator = createBottomTabNavigator({
    HomeTab: {
        screen: HomeTabScreen
    },
    SearchTab: {
        screen: SearchTabScreen
    },
    AddMediaTab: {
        screen: AddMediaTabScreen
    },
    LikesTab: {
        screen: LikesTabScreen
    },
    ProfileTab: {
        screen: ProfileTabScreen
    },    
},{
    animationEnabled:true,
    swipeEnabled:true,
    tabBarPosition:"bottom",
    tabBarOptions: {
        style: {
          ...Platform.select({
              android: {
                  backgroundColor:'white'
              }
          })  
        },
        activeTintColor:'#000',
        inactiveTintColor:'#d1cece',
        showLabel: false,
        showIcon:true
    }
});

