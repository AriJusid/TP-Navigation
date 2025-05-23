  import * as React from 'react';
  import { Button, TextInput, Text, View, StyleSheet } from 'react-native';
  import { NavigationContainer, useNavigation } from '@react-navigation/native';
  import ScreenB2 from './ScreenB2';
  import styles from '../styles/styles';

  
  function ScreenB1() {
      const navigation = useNavigation();
      return (
        <View style={styles.homeScreen}>
        <Text style={styles.text}>PERFIL</Text>
          <Button onPress = {() => navigation.navigate(ScreenB2)} title='Ver más'> </Button>
        </View>
      );
    }
  
  export default ScreenB1
  
