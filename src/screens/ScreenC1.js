  import * as React from 'react';
  import { Button, TextInput, Text, View, StyleSheet } from 'react-native';
  import { NavigationContainer, useNavigation } from '@react-navigation/native';
  import ScreenC2 from './ScreenC2';
  import styles from '../styles/styles';

  
  function ScreenC1() {
      const navigation = useNavigation();
      return (
        <View style={[styles.homeScreen, {backgroundColor: '#caffda'}]}>
        <Text style={{fontSize:20}}>Perfil</Text>
        <Text style={{fontSize:15}}>Agregar información sobre mi</Text>
        <TextInput 
            style = {styles.input}
            placeholder="Ingrese su información"/>
        <Button onPress = {() => navigation.navigate(ScreenC2)} title='Agregar'> </Button>
        </View>
      );
    }
  
  export default ScreenC1
  
