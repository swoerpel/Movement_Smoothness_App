import React from "react";
import { View, Text, Button } from "react-native";
import {Alert, StyleSheet,TouchableHighlight, ScrollView, TouchableOpacity} from 'react-native';
class HomeScreen extends React.Component 
{
	render() 
	{
		return (
			<View style={styles.container}>
			
				<View style={styles.title_view}>
					<Text>Movement Smoothness Test</Text>
				</View>
				<View style={styles.title_view}>
					<Text>Home Screen</Text>
				</View>
				<View style={styles.button_view}>
					<TouchableOpacity style={styles.user_button} onPress={() => this.props.navigation.navigate('Details')}>
						<Text>User</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.user_button} onPress={() => this.props.navigation.navigate('Details')}>
						<Text>Admin</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.footer_view}>
				
				</View>

			</View>
		);
	}
	
	//chet
}
export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
	flexDirection: 'column',
    //justifyContent: 'center',
  },
  title_view: {
	  flex:1,
	  backgroundColor: '#d9d4ae',
	  justifyContent: 'center', //vertical center
	  alignItems:'center' //horizontal center
	  
  },
  button_view: {
	  flex:1,
	  backgroundColor: '#f5fbf4',
	  justifyContent: 'center', //vertical center
	  alignItems:'center' //horizontal center
  },
  footer_view: {
	  flex:1,
	  backgroundColor: '#453d35',
	  justifyContent: 'center', //vertical center
	  alignItems:'center' //horizontal center
  },
  title_text: {
	  textAlign: 'center',
	  fontSize: 20,
	  //color: '#F1F1EC',
	  paddingTop: 20,
  },
  user_button:{
    alignItems: 'center',
    backgroundColor: '#4baaa4',
    padding: 20,
	margin: 5,
	width: 200,

  },

});