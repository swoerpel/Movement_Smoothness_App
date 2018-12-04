import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from "react-navigation";

import SelectUserScreen from './screens/SelectUserScreen'
import AdminTestListScreen from './screens/AdminTestListScreen'

import CreateNewTestScreen from './screens/CreateNewTestScreen'
import TestInfoScreen from './screens/TestInfoScreen'


const testListNavigator = createStackNavigator(
{
	'test_list_tab': AdminTestListScreen,
	'test_info_screen': TestInfoScreen,
	'edit_test_screen': CreateNewTestScreen, //for editing existing tests, tabs are hidden when navigating from this page
},
{
	initialRouteName: 'test_list_tab'
});

testListNavigator.navigationOptions = ({navigation}) => {
	//let tabbarVisible = true;
	//if (navigation.state.index > 0)
	//	tabBarVisible = false
	//return{tabBarVisible}
}

const adminTabNavigator = createBottomTabNavigator(
{
	'Test List': testListNavigator, //Tests that hold all created tests
	'Add Test': CreateNewTestScreen  //for initially creating tests, tabs are visible
	
},
{
	initialRouteName: 'Test List'
});

const selectUserStackNavigator = createStackNavigator(
{
	'Home': SelectUserScreen,
	'AdminTabs':adminTabNavigator,
	//'UserTabs':userTabNavigator
	
},
{
	initialRouteName: 'Home'
});


const AppContainer = createAppContainer(selectUserStackNavigator);

export default class App extends React.Component
{
	
	constructor(props)
	{
		super(props)
		this.state = {
			testList: 
			[
			{
				testID: 1,
				testName: 'Chetting Around'
			},
			{
				testID: 2,
				testName: 'Getting Chetted'
			},
			{
				testID: 3,
				testName: 'Chetlapalouza'
			},
			]
		}
		
	}
	
	addTestToList = (newTest) => {
		//this.setState(prevState => ({
		//	testList:[...prevState.testList, newTest]
		//}))
	}
	
	render()
	{
		return <AppContainer screenProps={{testList: this.state.testList}} />
	}
	
}
