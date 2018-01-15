import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class MainScreen extends React.Component {
  static navigationOptions = {
    title: 'Main',
  };

  buttonPressed() {
    this.props.navigation.navigate("Modal")
  }

  render() {
    return (
      <View style={this.styles.container}>
        <Text>{"Welcome to the app! Press the button."}</Text>

        <TouchableOpacity onPress={() => this.buttonPressed()}>
          <View style={this.styles.button}>
            <Text style={{color: 'white'}}>{"Press me to move on!"}</Text>
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
