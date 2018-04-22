import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class LoginScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    console.log("helo ", navigate)
    return (
      <View>
        <Text>Hello LoginScreen!</Text>
        <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigate('Profile', { name: 'Jane' })
        }
        />
      </View>
    );
  }
}
