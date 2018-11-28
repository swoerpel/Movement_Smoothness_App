import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity} from "react-native";
import styles from './Style'

class AdminHomeScreen extends React.Component {
	render() 
	{
		return (
			<View style={styles.container}>
			
				<View style={styles.title_view}>
					<Text style={styles.title_text}>Admin Home Screen</Text>
				</View>
				<View style={styles.sub_title_view}>
					<Text style={styles.sub_title_text}>List of tests</Text>
				</View>
				<View style={styles.button_view}>

				</View>
				<View style={styles.footer_view}>
					<TouchableOpacity style={styles.user_button} onPress={() => this.props.navigation.navigate('CreateNewTest')}>
						<Text style={styles.button_text}>Create New Test</Text>
					</TouchableOpacity>
				</View>

			</View>
		);
	}
}
export default AdminHomeScreen

