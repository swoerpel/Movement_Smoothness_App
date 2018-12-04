import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView} from "react-native";
import TestListRow from './TestListRow'

class AdminTestListScreen extends React.Component {
	static navigationOptions = () => {
		return {
			headerTitle: 'Test List',
		};
	};

	render() {
		const { screenProps } = this.props;
		return (
			<ScrollView>
				{screenProps.testList.map((testItem) => <TestListRow key={testItem.testID} testItem={testItem} />)}
			</ScrollView>
	);
	}
}
export default AdminTestListScreen

