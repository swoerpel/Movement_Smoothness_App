import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from "react-navigation";

import SelectUserScreen from './screens/SelectUserScreen'
import AdminTestListScreen from './screens/AdminTestListScreen'

import CreateNewTestScreen from './screens/CreateNewTestScreen'
import TestInfoScreen from './screens/TestInfoScreen'

const styles = StyleSheet.create({
	tab_text: 
	{
		fontWeight: '600',
		color: 'black'
	},
})


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
	'Test List': 
	{
		screen: testListNavigator, //Tests that hold all created tests
		navigationOptions:
		{
			tabBarLabel: (<View style={{alignItems:'center', justifyContent:'center', paddingBottom: 12}}>
							<Text style={styles.tab_text}>Test List</Text></View>),

		}
	},
	'Add Test': 
	{
		screen: CreateNewTestScreen,  //for initially creating tests, tabs are visible
		navigationOptions:
		{
			tabBarLabel: (<View style={{alignItems:'center', justifyContent:'center', paddingBottom: 12}}>
							<Text style={styles.tab_text}>Add Test</Text></View>)
		},


	}
	
},
{
	initialRouteName: 'Test List',
	tabBarOptions: 
	{
		activeBackgroundColor:'#b9b9a4',
		//tabStyle:
		//{
		//	backgroundColor: 'black'
		//}
		
	}

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
				testID:1,
				testName:"Chetting Around",
				testDuration:"default",
				testTrials:"default",
				testDescription:"default",
                trial_data: []
			},
			{
				testID:2,
				testName:"Chetack",
				testDuration:"default",
				testTrials:"default",
				testDescription:"default",
                trial_data: []
			},
			{
				testID:3,
				testName:"Chetlupa",
				testDuration:"default",
				testTrials:"default",
				testDescription:"default",
                trial_data: []
			},
			]
		}
		
	}
	
	addTestToList = (newTest) => {
        temp_test_list = this.state.testList
		if (temp_test_list.length === 0)
			newTest['testID'] = 1
        else
            newTest['testID'] = this.getMaxTestID() + 1
        temp_test_list = [...temp_test_list,newTest]

		this.setState(
		{
			testList:[...this.state.testList, newTest]
        }, 
        () => {console.log('new state ',this.state)})
        
        return true
	}
    
	removeTest = (testID) => {
		console.log('deleting test number ' + testID.toString())
		temp_test_list = this.state.testList
		temp_test_list = temp_test_list.filter(tst => tst.testID != testID)
		this.setState({testList: temp_test_list})
	}
    
    getMaxTestID = () =>
    {

        let temp_list = this.state.testList
        let indexList = temp_list.map(tst => tst.testID)
        let maxID = Math.max(...indexList)
        return maxID         
    }

    
	render()
	{
		return <AppContainer 
				screenProps={
					{
						testList: this.state.testList,
						addTestToList: this.addTestToList,
                        removeTest: this.removeTest,
                        getMaxTestID: this.getMaxTestID
					}} />
	}
	
}

