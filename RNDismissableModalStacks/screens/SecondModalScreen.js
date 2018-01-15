import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class SecondModalScreen extends React.Component {
  static navigationOptions = {
    title: 'Second Modal',
  };

  backButtonPressed() {
    this.props.navigation.goBack()
  }

  dismissButtonPressed() {
    this.props.screenProps.dismiss()
  }

  render() {
    return (
      <View style={this.styles.container}>
        <Text>{"You reached the second modal screen!"}</Text>

        <TouchableOpacity onPress={() => this.backButtonPressed()}>
          <View style={this.styles.button}>
            <Text style={{color: 'white'}}>{"Go back"}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.dismissButtonPressed()}>
          <View style={[this.styles.button, {backgroundColor:"#ee3131"}]}>
            <Text style={{color: 'white'}}>{"Dismiss Modal"}</Text>
          </View>
        </TouchableOpacity>

      </View>
    )
  }

  styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    button: {
      height: 45,
      width: 350,
      backgroundColor:"#0075ff",
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      marginTop: 10,
    }
  })
}
