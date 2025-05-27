 
import * as React from 'react';
import { Button, TextInput, Text, View, StyleSheet } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import styles from '../styles/styles';


function ScreenC2() {
    const navigation = useNavigation();
    return (
      <View style={[styles.homeScreen, {backgroundColor: '#caffda'}]}>
        <Text style={{fontSize:20}}>Seguro que desea agregar esta información?</Text>
        <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', width:200}}>
          <Button 
           title='Agregar'> </Button>
          <Button title='Cancelar'> </Button>
        </View>
      </View>
    );
  }

export default ScreenC2
