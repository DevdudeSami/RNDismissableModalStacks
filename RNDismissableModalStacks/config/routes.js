import React from 'react';
import { StackNavigator } from 'react-navigation';

import { MainScreen, ModalScreen, SecondModalScreen } from '../screens/';
import { DismissableStackNavigator } from '../helpers/'

const MainNavigator = StackNavigator({
  Main: { screen: MainScreen }
})

const ModalNavigator = DismissableStackNavigator({
  FirstModal: { screen: ModalScreen },
  SecondModal: { screen: SecondModalScreen }
})

export default Root = StackNavigator({
  Main: { screen: MainNavigator },

  Modal: { screen: ModalNavigator }
},{
  mode: 'modal',
  headerMode: 'none',
})
