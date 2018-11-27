import React from "react";
import { View, Text, Button } from "react-native";
import {Alert, StyleSheet, TouchableHighlight, ScrollView, TouchableOpacity} from 'react-native';
import styles from './Style'
class HomeScreen extends React.Component 
{
	render() 
	{
		return (
			<View style={styles.container}>
			
				<View style={styles.title_view}>
					<Text style={styles.title_text}>Movement Smoothness Tester</Text>
				</View>
				<View style={styles.sub_title_view}>
					<Text style={styles.sub_title_text}>Select User</Text>
				</View>
				<View style={styles.button_view}>
					<TouchableOpacity style={styles.user_button} onPress={() => this.props.navigation.navigate('UserHome')}>
						<Text style={styles.button_text}>User</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.user_button} onPress={() => this.props.navigation.navigate('AdminHome')}>
						<Text style={styles.button_text}>Admin</Text>
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

