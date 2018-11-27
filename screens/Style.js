import { StyleSheet } from 'react-native';

//export default StyleSheet.create({})


 export default StyleSheet.create({
  container: {
    flex: 1,
	
	flexDirection: 'column',
    //justifyContent: 'center',
  },
  title_view: {
	  flex:4,
	  backgroundColor: '#d9d4ae',
	  justifyContent: 'center', //vertical center
	  alignItems:'center' //horizontal center
	  
  },
  sub_title_view: {
	  flex:2,
	  backgroundColor: '#d9d4ae',
	  justifyContent: 'center', //vertical center
	  alignItems:'center' //horizontal center
	  
  },
  button_view: {
	  flex:4,
	  backgroundColor: '#f5fbf4',
	  justifyContent: 'center', //vertical center
	  alignItems:'center' //horizontal center
  },
  footer_view: {
	  flex:2,
	  backgroundColor: '#453d35',
	  justifyContent: 'center', //vertical center
	  alignItems:'center' //horizontal center
  },
  title_text: {
	  textAlign: 'center',
	  fontWeight: "bold",
	  fontSize: 36,
	  //color: '#F1F1EC',
	  paddingTop: 20,
  },
   sub_title_text: {
	  textAlign: 'center',
	  fontSize: 20,
	  paddingTop: 10,
	  //color: '#F1F1EC',

  },
   button_text: {
	  textAlign: 'center',
	  fontSize: 20,

	  //color: '#F1F1EC',

  },
  user_button:{
    alignItems: 'center',
    backgroundColor: '#4baaa4',
    padding: 20,
	margin: 5,
	width: 300,

  },

}); 