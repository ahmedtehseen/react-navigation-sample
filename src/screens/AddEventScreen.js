import React, { Component } from 'react';
import { View, Text } from 'react-native';

export class AddEventScreen extends Component {
	static navigationOptions = {
		 tabBarLabel: 'EventList',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    // tabBarIcon: ({ tintColor }) => (
    //   <Image
    //     source={require('./chats-icon.png')}
    //     style={[styles.icon, {tintColor: tintColor}]}
    //   />
    // ),
	}
	render() {
		return (
			<View>
				<Text>AddEventScreen</Text>
			</View>
		);
	}
}
