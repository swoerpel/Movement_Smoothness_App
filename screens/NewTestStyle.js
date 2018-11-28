import { StyleSheet } from 'react-native';

//export default StyleSheet.create({})


 export default StyleSheet.create({
  container: {
    flex: 1,
	
	flexDirection: 'column',
    //justifyContent: 'center',
  },
  title_view: {
	  flex:1,
	  //backgroundColor: '#d9d4ae',
	  backgroundColor: '#ffffff',
	  //justifyContent: 'center', //vertical center
	  //alignItems:'center' //horizontal center
	  
  },
  attribute_view: {
	  flex:1,
	  backgroundColor: '#000000',
	  justifyContent: 'center', //vertical center
	  //justifyContent: 'space-between',
	  alignItems:'center', //horizontal center
	  flexDirection: 'row',
	  
  },
  description_view: {
	  flex:4,
	  backgroundColor: '#ffffff',
	  justifyContent: 'center', //vertical center
	  alignItems:'center' //horizontal center
  },
  footer_view: {
	  flex:1,
	  backgroundColor: '#000000',
	  justifyContent: 'center', //vertical center
	  alignItems:'center' //horizontal center
  },
  title_text: {
	  textAlign: 'center',
	  fontWeight: "bold",
	  fontSize: 36,
	  
	  //color: '#F1F1EC',
  },
  attribute_text: {
	  flex:2,
	  fontSize: 22,
	  //justifyContent: 'center', //vertical center
	  //alignItems:'center', //horizontal center
	  margin: 5,
	  color: '#ffffff', 
  },
  attribute_input: {
	  flex: 4,
	  alignSelf: 'center',
	  backgroundColor: '#ffffff', 
  },
  attribute_input_small: {
	  flex: 2,
	  alignSelf: 'center',
	  backgroundColor: '#ffffff', 
	  margin: 5
  },
  duration_picker: {
	  flex: 1,
	  alignSelf: 'center',
	  backgroundColor: '#ffffff', 
	  margin: 5
  },

}); 