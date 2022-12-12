import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#1F1E25',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:10,
  },
  nameParticipant:{
    color:'#FDFCFE',
    fontSize:16,
    marginHorizontal:16,
    flex:1,
  },
  button:{
    backgroundColor:"red",
    width:56,
    height:56,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5
  },
  buttonText:{
    color:'white',
    fontWeight:'bold'
  }
 
});