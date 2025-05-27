  import * as React from 'react';
  import { Button, TextInput, Text, View, StyleSheet } from 'react-native';
  import { NavigationContainer, useNavigation } from '@react-navigation/native';
  import styles from '../styles/styles';

  
  function ScreenD2() {
      const navigation = useNavigation();
      return (
        <View style={[styles.homeScreen, {backgroundColor: '#fffab9'}]}>
          <Text style={{fontSize:20}}>Aquí hay más ajustes</Text>
          <Text style={{fontSize:15}}>Desea agregar más ajustes?</Text>
          <TextInput style = {styles.input} placeholder="Agregar ajuste"/>
          <Button title='Cerrar'> </Button>
        </View>
      );
    }
  
  export default ScreenD2
