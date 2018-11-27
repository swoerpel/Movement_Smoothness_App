import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
//import HomeScreen from './screens/HomeScreen'
//import DetailsScreen from './screens/DetailsScreen'
import HomeScreen from './screens/HomeScreen'
import UserHomeScreen from './screens/UserHomeScreen'
import AdminHomeScreen from './screens/AdminHomeScreen'



const RootStack = createStackNavigator(
  {
    'Home': HomeScreen,
    //'Details': DetailsScreen
	'UserHome': UserHomeScreen,
	'AdminHome': AdminHomeScreen,
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
