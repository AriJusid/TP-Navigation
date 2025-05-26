  import * as React from 'react';
  import { Button, TextInput, Text, View, StyleSheet } from 'react-native';
  import { NavigationContainer, useNavigation } from '@react-navigation/native';
  import ScreenB2 from './ScreenB2';
  import styles from '../styles/styles';

  
  function ScreenB1() {
      const navigation = useNavigation();
      return (
        <View style={[styles.homeScreen, {backgroundColor:'#cce4ff'}]}>
          <Text style={{fontSize:20}} >Buscar eventos</Text>
          <TextInput style = {styles.input}
            placeholder="Busca un evento"/>
          <Button onPress = {() => navigation.navigate(ScreenB2)} title='Buscar' color="#642684"> </Button>
          
        </View>
      );
    }
  
  export default ScreenB1
  
