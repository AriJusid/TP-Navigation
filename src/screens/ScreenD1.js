
  import * as React from 'react';
  import { Button, TextInput, Text, View, StyleSheet } from 'react-native';
  import { NavigationContainer, useNavigation } from '@react-navigation/native';
  import ScreenD2 from './ScreenD2';
  import styles from '../styles/styles';

  
  function ScreenD1() {
      const navigation = useNavigation();
      return (
        <View style={styles.homeScreen}>
        <Text style={styles.text}>AJUSTES</Text>
          <Button onPress = {() => navigation.navigate(ScreenD2)} title='Ver más'> </Button>
        </View>
      );
    }
  
  export default ScreenD1
  
