import * as React from 'react';
import { Image, Button, TextInput, Text, View, StyleSheet, SafeAreaView, TouchableOpacity, StatusBar} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import ScreenA2 from './ScreenA2';
import styles from '../styles/styles';

  export default function ScreenA1() {
    const navigation = useNavigation();
    const picInicio = require('../../assets/images/picInicio.png');
  
    return (
      <SafeAreaView style={[styles.container, {backgroundColor:'#f4ccff'}]}>
        <Image source={picInicio} style={styles.img}/>
        <View style={{flex:5, marginBottom:60}}>
          <Text style={{fontWeight:'bold', fontSize: 28, textAlign:'center'}}>Descubre eventos </Text>
          <Text style={{fontWeight:'bold', fontSize: 28, textAlign:'center', marginBottom: 15}}>que conectan tu pasión</Text>
  
          <Text style={{fontSize: 15, textAlign:'center', marginHorizontal:30}}>Participa de eventos relevantes para </Text>
          <Text style={{fontSize: 15, textAlign:'center', marginHorizontal:30}}>vos, de forma simple y organizada</Text>
          <TextInput 
            style = {styles.input}
            placeholder="Ingrese su email"/>
        </View>
        <View style={styles.botones}>
          <TouchableOpacity style={{height:10}} onPress = {() => navigation.navigate(ScreenA2)}>
            <Text style={styles.botonVio}>Log in</Text>
          </TouchableOpacity>
          <TouchableOpacity >
            <Text style={[styles.botonLight,  styles.shadowProp]}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }
  

