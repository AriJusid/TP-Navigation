import * as React from 'react';
import styles from '../styles/styles';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, TouchableOpacity, Platform, StyleSheet, Text, TextInput, View, Button, Image, KeyboardAvoidingView, } from 'react-native';

export default function ScreenA2() {
  
  const [mail, onChangeText] = React.useState('');
  const [psw, onChangeNumber] = React.useState('');
  const loginPic = {uri: 'https://raw.githubusercontent.com/AriJusid/TP-Log-In/refs/heads/main/assets/images/login.png'};
  const arrow = {uri: 'https://cdn-icons-png.flaticon.com/512/154/154630.png'};

  /*firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in
      var email = user.email;
      // ...
  } else {
      // User is not signed in
      // ...
  }
});
firebase.auth().signInWithEmailAndPassword(email, password);*/
  return (
    <View style={{flex: 1}}>
    <View style={styles.header}> 

      <Image style= {styles.arrow} source={arrow}/>
      <Text style={styles.headerText}> Bienvenido de vuelta</Text>

    </View>

    <View style={styles.picView}>
      <Image 
          style={{width:350,
            height:250,
            resizeMode:'contain',}}
          source={loginPic}
        />

    </View>

      <View style={{flex: 4}}>  
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <TextInput 
            style = {styles.input}
            onChangeText={onChangeText}
            value={mail}
            placeholder="Ingrese su email"/>

          <TextInput 
            style = {styles.input}
            onChangeText={onChangeNumber}
            value={psw}
            placeholder="Ingrese su contraseña"
            secureTextEntry/>

          <StatusBar backgroundColor="#642684" style='light'/>
        
        <TouchableOpacity style={styles.btnView}>
          <Button
            title="Ingresar"
            color="#642684"/>
        </TouchableOpacity>
        </KeyboardAvoidingView>
        
        <View style={styles.bottomSection}>
          <Text style={{fontSize:15,}}>No tienes cuenta?  <Text style={{color: '#642684', fontSize:15, textDecorationLine: 'underline'}} >Crear cuenta</Text>
          </Text>
          <View style={styles.redes}>
            <Text style={{fontSize: 15, textAlign: 'center', marginBottom:10,}}>O continua con </Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
              <Image style={{width: 30, height: 30}} source={{uri: 'https://cdn.iconscout.com/icon/free/png-512/free-google-logo-icon-download-in-svg-png-gif-file-formats--brands-pack-logos-icons-189824.png?f=webp&w=256'}}/>
              <Image style={{width: 48, height: 48}} source={{uri: 'https://static.vecteezy.com/system/resources/previews/042/148/632/non_2x/instagram-logo-instagram-social-media-icon-free-png.png'}}/>  
              <Image style={{width: 30, height: 30}} source={{uri: 'https://cdn.pixabay.com/photo/2021/06/15/12/51/facebook-6338508_1280.png'}}/>
            </View>
          </View>
          </View>
      </View>  
    </View>
  );
}