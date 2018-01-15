import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class ModalScreen extends React.Component {
  static navigationOptions = {
    title: 'Modal',
  };

  modalScreenButtonPressed() {
    this.props.navigation.navigate("SecondModal")
  }

  dismissButtonPressed() {
    this.props.screenProps.dismiss()
  }

  render() {
    return (
      <View style={this.styles.container}>
        <Text>{"This is the first modal screen."}</Text>

        <TouchableOpacity onPress={() => this.modalScreenButtonPressed()}>
          <View style={this.styles.button}>
            <Text style={{color: 'white'}}>{"Go to next screen"}</Text>
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
