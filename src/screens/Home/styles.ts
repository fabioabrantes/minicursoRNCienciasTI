import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#131016',
    paddingHorizontal: 24,
  },
  header:{
    marginTop:75,
  },
  title:{
    fontWeight:'bold',
    fontSize:32,
    color:'#FDFCFE',
  },
  dateEvent:{
    fontSize:16,
    color:'#FDFCFE',
    marginBottom:74,
  },
  form:{
    flexDirection:'row',
    marginBottom:42
  },
  input:{
    flex:1,
    height: 56,
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    color: '#FFFF',
    padding: 16,
    fontSize: 16,
    marginRight:7,
  },
  button:{
    backgroundColor:"green",
    width:56,
    height:56,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5
  },
  buttonText:{
    color:'white',
    fontWeight:'bold'
  },
  title2:{
    fontWeight:'bold',
    fontSize:32,
    color:'#FDFCFE',
    marginBottom:16
  },
  eventDate:{
    color: '#6b6b6b',
    fontSize:16,
  }
});