import { Button, TextInput, Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  homeScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#ffffff',
  },

  img:{
    width:350,
    height:250,
    resizeMode:'contain',
    flex:16,
    marginBottom:85,
    marginTop:220,
  },
  botones:{
    width: 280,
    height: 40,
    flexDirection:'row',
    justifyContent: 'space-between',
    flex:5,
  },


  botonVio:{
    
    backgroundColor: '#642684',
    width:120,
    height:40,
    color: 'white',
    borderRadius:5,
    textAlign:'center',
    paddingTop:9,
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 9,
    },

    shadowOpacity: 0.50,
    shadowRadius: 12.35,

    elevation: 19,
    
  },

  botonLight:{
    backgroundColor: '#fff',
    width:120,
    height:40,
    borderColor: '#642684',
    borderRadius:5,
    textAlign:'center',
    paddingTop:9,

    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 9,
    },

    shadowOpacity: 0.50,
    shadowRadius: 12.35,

    elevation: 19,
  },
  header:{
    flex: 1,
    marginTop: 60,
    marginLeft: 20,
    flexDirection: 'row'
  },

  redes:{
    width: 300,
    height: 150,
    marginTop:15,
  },

  arrow:{
    resizeMode: 'contain',
    marginTop: 5,
    width: 25,
    height: 25,
    marginRight: 10,
  },

  logPic:{
    resizeMode: 'contain',
    flex:7,
    justifyContent: 'center',
    marginRight:10
  },

  picView:{
    flex:3, 
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    marginTop: 40,
  },

  headerText:{
    fontSize: 22,
  },

  btnView:{
    justifyContent: 'center',
    alignContent: 'center',
    width:300,
    borderRadius: 5, 
    marginBottom:45,
   },

  container: {
    flex: 2,
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  input: {
    height: 45,
    width:300,
    margin: 12,
    borderWidth: 1,
    borderRadius:5,
    padding: 10,
    borderColor: '#642684',
    backgroundColor: 'white',
  },
  bottomSection: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default styles