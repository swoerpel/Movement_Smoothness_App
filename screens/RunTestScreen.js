import React from "react";
import { View, Text, Button } from "react-native";
import {Alert, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import Swipeout from 'react-native-swipeout';
import TrialListRow from './TrialListRow'

class RunTestScreen extends React.Component 
{
    constructor(props)
    {
        super(props)
        this.state = {
            currentTest: this.props.navigation.getParam('currentTest','chet'),
            stopwatchOn: false,

            secs:0,
            mins:0,
            time_string:'00:00',
            intervalObj:0,
           
            
        }

        this.incrementTime = this.incrementTime.bind(this)
        this.updateStopwatchDisplay = this.updateStopwatchDisplay.bind(this)
        
    }
    
    static navigationOptions = ({navigation}) => (
    {
        //title: navigation.state.params.testName,//`${navigation.state.params.title}`
        headerStyle:
        {
            backgroundColor:'#bd4440',
            paddingBottom: 20,
        },
        headerTitle: (<View style={styles.header_view}>
                        <Text style={styles.header_text}>
                            {navigation.state.params.currentTest.testName}
                        </Text>
                     </View>),
        //headerTitleStyle: {ma 40}

        
    })
    

    
 
    toggleStopwatch  = () =>
    {
        
        
        
        if (this.state.stopwatchOn)
        {
            
            this.setState(
            {
                intervalObj: clearInterval(this.state.intervalObj),
                stopwatchOn: false
            })
        }
        else
        {
            this.setState(
            { 
                intervalObj: setInterval(this.incrementTime, 1000),
                stopwatchOn: true
            })
        }
        
    }
    
    incrementTime()
    {
		if (this.state.stopwatchOn) 
		{
			this.setState({secs: this.state.secs + 1})
           
            if (this.state.secs == 60)
            {
                this.setState({secs: 0, mins: this.state.mins + 1, })
                
            }
            this.updateStopwatchDisplay()

		}
    }
    
    
    
	updateStopwatchDisplay()
	{
       
        secs = this.state.secs > 9 ? "" + this.state.secs : "0" + this.state.secs
        mins = this.state.mins > 9 ? "" + this.state.mins : "0" + this.state.mins
        this.setState({time_string: (mins + ':' + secs) })
    }
    
    completeTest = () =>
    {
        
        this.props.screenProps.addTrial(this.state.currentTest.testID, this.state.time_string)
        //add trial to list 
        // increment trial count 
        // zero timer
        this.setState({
            intervalObj: clearInterval(this.state.intervalObj),
            stopwatchOn: false,
            secs: 0,
            mins: 0,
            time_string: '00:00'
            
        })
        Alert.alert('Trial Completed')
        this.props.navigation.goBack()
        
    }
    
	render() 
	{
		return (
			<View style={styles.container}>
                <View style = {styles.stopwatch_view}>
                    <Text style = {styles.stopwatch_text}>
                        {this.state.time_string}
                    </Text>
                </View>
                <View style={styles.run_test_button_view}>
                    <TouchableOpacity
                    onPress={this.toggleStopwatch}
                    style={this.state.stopwatchOn ? styles.stop_button : styles.start_button}
                    activeOpacity={1}
                    >

                    <Text style={styles.trials_title_text}>{this.state.stopwatchOn ? 'Stop': 'Start'}</Text>

                    </TouchableOpacity>
                </View>
                <View style={styles.complete_test_view}>
                    <TouchableOpacity
                    onPress={this.completeTest}
                    style={styles.complete_test_button}
                    activeOpacity={1}
                    >

                    <Text style={styles.trials_title_text}>Complete Test</Text>

                    </TouchableOpacity>
                </View>
			</View>
		);
	}
	
	//chet
}
export default RunTestScreen



const styles = StyleSheet.create({
	container:
	{
		flex:1,
	},
    stopwatch_view:	{
		flex:5,
        justifyContent: 'center',
        alignItems: 'center'
        //backgroundColor:'gray'
	},
    run_test_button_view:{
        flex:2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    complete_test_view: {
        
        flex:2,
        justifyContent: 'center',
        alignItems: 'center'
    },

	title_view:
	{
		flex:1,
        backgroundColor:'#5b9095',
        justifyContent: 'center',
        alignItems: 'center'
	},
    list_view:
	{
		flex:6
	},
    info_title_view:
    {
        flex:1,
        backgroundColor:'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    info_description_view:
    {
        
        flex:4,
        padding:5
    },
    stopwatch_text:
    {
        color:'black',
		fontWeight: '600',
		fontSize: 60,
        
    },
    trials_title_text:
    {
        color:'white',
		fontWeight: '600',
		fontSize: 26,
        
    },
    paragraph_text:
    {
        color:'black',
		fontWeight: '200',
		fontSize: 12,    
    },
    divider: {
        borderBottomColor: 'rgba(0,0,0,0.1)',
        borderBottomWidth: 1,
    },
    header_view:
    {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        flexDirection: 'row',
        height: 25,
        
    },
    header_text:
    {
        color:'white',
        alignSelf: 'center',
		fontWeight: '600',
		fontSize: 22,
        paddingBottom:5
    },
  start_button: {
    height: '60%',
    width: '80%',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    //marginTop: 40,
    zIndex: 100,
    backgroundColor: '#97cc8c'
  },
  stop_button: {
    height: '60%',
    width: '80%',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    //marginTop: 40,
    zIndex: 100,
    backgroundColor: '#bd4440'
  },
  complete_test_button: {
    height: '60%',
    width: '80%',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    //marginTop: 40,
    zIndex: 100,
    backgroundColor: '#3c6989'
  },
})