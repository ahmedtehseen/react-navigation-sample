import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';

export class LoginScreen extends Component {
	state = {
    isDateTimePickerVisible: false,
  };

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (date) => {
    const checkDate = new Date(date);
    console.log('Date', checkDate.getDate(), 'Day',checkDate.getDay(), 'Hours', checkDate.getHours(), 'Mins', checkDate.getMinutes())
    this._hideDateTimePicker();
  };

	render() {
		const { navigate } = this.props.navigation;
		return (
			<View>
				<Text>LoginScreen</Text>
				<Button title='Login' onPress={() => navigate('EventListScreen')}/>
				<TouchableOpacity onPress={this._showDateTimePicker}>
          <Text>Show TimePicker</Text>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
          mode={'datetime'}
        />
			</View>
		);
	}
}
