import React from "react";
import { View, Text, Button, StyleSheet, } from "react-native";
import styles from './Styles'
class UserHomeScreen extends React.Component {
	render() 
	{
		return (
			<View style={styles.container}>
			
				<View style={styles.title_view}>
					<Text style={styles.title_text}>User Home Screen</Text>
				</View>
				<View style={styles.sub_title_view}>
					<Text style={styles.sub_title_text}>List of Tests</Text>
				</View>
				<View style={styles.button_view}>

				</View>
				<View style={styles.footer_view}>
				
				</View>

			</View>
		);
	}
}
export default UserHomeScreen
