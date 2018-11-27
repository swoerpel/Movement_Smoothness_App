import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './screens/HomeScreen'
import DetailsScreen from './screens/DetailsScreen'


const RootStack = createStackNavigator(
  {
    'Home': HomeScreen,
    'Details': DetailsScreen
  },
  {
    initialRouteName: 'Home'
  }
);


const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component
{
	render()
	{
		return <AppContainer />
	}
	
	
}