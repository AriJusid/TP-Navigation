import * as React from 'react';
import { Button, TextInput, Text, View, StyleSheet } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import ScreenA2 from './ScreenA2';
import styles from '../styles/styles';



function ScreenA1() {
    const navigation = useNavigation();
    return (
      <View style={styles.homeScreen}>
        <Text style={styles.text}>HOME</Text>
        <Button onPress = {() => navigation.navigate(ScreenA2)} title='Ver más'> </Button>
      </View>
    );
  }

export default ScreenA1
