
  import * as React from 'react';
  import { Button, TextInput, Text, View, StyleSheet } from 'react-native';
  import { NavigationContainer, useNavigation } from '@react-navigation/native';
  import ScreenD2 from './ScreenD2';
  import styles from '../styles/styles';

  
  function ScreenD1() {
      const navigation = useNavigation();
      return (
        <View style={[styles.homeScreen, {backgroundColor: '#fffab9'}]}>
        <Text style={{fontSize:20}}>Ajustes</Text>
        <TextInput style = {styles.input} placeholder="Buscar ajustes"/>
        <Button onPress = {() => navigation.navigate(ScreenD2)} title='Más ajustes'> </Button>
        </View>
      );
    }
  
  export default ScreenD1
  
