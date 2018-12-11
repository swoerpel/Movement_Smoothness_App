import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

class TestListRow extends React.Component {
  render() {
    const {testItem} = this.props;
    return (
      <React.Fragment>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('test_info_screen',
            {
              testID: testIndex,
              testName: testItem.testName,
            }
          )}>
		  
          <View style={styles.row}>
            <View style={styles.nameAndNumber}>
              <Text style={styles.testID}>{testItem.testID}</Text>
              <Text style={styles.testName}>{testItem.testName}</Text>
            </View>

          </View>
        </TouchableOpacity>

        <View style={styles.divider} />
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({

  row: {
    padding: 15,
    justifyContent: 'space-evenly',
	backgroundColor: '#5b9095'
  },

  nameAndNumber: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 3
  },

  testName: {
    fontSize: 18,
    fontWeight: '500',
  },

  testID: {

  },

  section: {
    color: '#9c9c9c',
    marginBottom: 3,
  },

  numberOfStudents: {
    color: '#38d39f',
    fontWeight: '600',
  },

  divider: {
    borderBottomColor: 'rgba(0,0,0,0.1)',
    borderBottomWidth: 1,
  },


});

export default withNavigation(TestListRow);