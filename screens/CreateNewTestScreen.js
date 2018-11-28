import React from "react";
import { View, Text, Button, StyleSheet, TextInput, Picker} from "react-native";
//import styles from './Style'
import styles from './NewTestStyle'
class CreateNewTestScreen extends React.Component {
	constructor(props)
	{
		super(props)
		this.state = {
			duration_label:"S"
		}

		console.log(this.state.duration_label)
	}

	
	render() 
	{
		return (
			<View style={styles.container}>
			
				<View style={styles.title_view}>
					<Text style={styles.title_text}>Create New Test</Text>
				</View>
				
				<View style={styles.attribute_view}>
					<Text style={styles.attribute_text}>Name:</Text>
					<TextInput style={styles.attribute_input}/>
				</View>

				<View style={styles.attribute_view}>
					<Text style={styles.attribute_text}>Duration:</Text>
					<TextInput style={styles.attribute_input_small}/>
					<Picker style={styles.duration_picker}
						selectedValue={this.state.duration_label}
						onValueChange={(value)=>this.setState({duration_label: value})}>
						<Picker.Item label={"secs"} value="S" />
						<Picker.Item label={"mins"} value="M" />
						
						<Picker.Item label={"hrs"} value="H" />
					</Picker>
				</View>
				
				<View style={styles.attribute_view}>
				
				</View>
				
				<View style={styles.description_view}>
				
				</View>
				
				<View style={styles.footer_view}>
				
				</View>

			</View>
		);
	}
}
export default CreateNewTestScreen

