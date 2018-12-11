import React from "react";
import { View, Text, Button } from "react-native";
import {Alert, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';

class TestInfoScreen extends React.Component 
{
    constructor(props)
    {
        super(props)
        this.state = {
            
            
        }
        
    }
    
    static navigationOptions = ({navigation}) => (
    {
        title: navigation.state.params.testName,//`${navigation.state.params.title}`
    })
	render() 
	{
		return (
			<View style={styles.container}>

			</View>
		);
	}
	
	//chet
}
export default TestInfoScreen

const styles = StyleSheet.create({
	container:
	{
		flex:1
	}
})