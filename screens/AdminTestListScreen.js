import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView} from "react-native";
import TestListRow from './TestListRow'

class AdminTestListScreen extends React.Component {
	static navigationOptions = () => {
		return {
			headerTitle: <View style={styles.title_view}><Text style={styles.title_text}>Test List</Text></View>,
			
			
		};
	};

	render() {
		const { screenProps } = this.props;
		return (
			<ScrollView>
				{screenProps.testList.map((testItem, index) => <TestListRow removeTest={this.props.screenProps.removeTest} key={testItem.testID} testItem={testItem}  />)}
			</ScrollView>
	);
	}
    
    

}
export default AdminTestListScreen

const styles = StyleSheet.create({
	title_view: 
	{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	title_text: 
	{
		fontWeight: '600',
		fontSize: 26,
		color: 'black',
		alignSelf: 'center'
	},
})