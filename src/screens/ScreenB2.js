
import * as React from 'react';
import { Button, TextInput, Text, View, StyleSheet } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import styles from '../styles/styles';


function ScreenB2() {
    const navigation = useNavigation();
    return (
      <View style={[styles.container, {backgroundColor:'#cce4ff'}]}>
        <Text style={{margin:20, fontSize:20}}>Resultados</Text>
        <Button title='Ver más' color="#642684"> </Button>
        <Text style={{fontSize:20}}>Quieres calificar los resultados?</Text>
        <TextInput style = {styles.input}
            placeholder="Califica tu busqueda"/>
      </View>
    );
  }

export default ScreenB2
