import React from 'react';
import { ScrollView } from 'react-native';
import { StackNavigator, DrawerNavigator, DrawerItems, TabNavigator } from 'react-navigation';
import { LoginScreen } from '../screens/LoginScreen';
import { EventListScreen } from '../screens/EventListScreen';
import { EventScreen } from '../screens/EventScreen';
import { AddEventScreen } from '../screens/AddEventScreen';
import { SettingsScreen } from '../screens/SettingsScreen';


const TabNavigation = TabNavigator({
  Home: {
    screen: EventListScreen,
  },
  Notifications: {
    screen: AddEventScreen,
  },
}, {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});


const drawerNavigation = DrawerNavigator({
	EventListScreen: { screen: TabNavigation },
	EventScreen: { screen: EventScreen },
	AddEventScreen: { screen: AddEventScreen },
	SettingsScreen: { screen: SettingsScreen }
}, {
	contentComponent: props => <ScrollView><DrawerItems {...props} /></ScrollView>,
	contentOptions: {
		activeTintColor: '#FF69B4',
		style: {
			flex: 1,
			paddingTop: 15,
		},
	},
});

drawerNavigation.navigationOptions = {
    header: null
}


const Navigation = StackNavigator({
	LoginScreen: { screen: LoginScreen },
	EventListScreen: { screen: drawerNavigation },
}, {
	headerMode: 'screen',
	initialRouteName: 'LoginScreen',
});

export { Navigation };
