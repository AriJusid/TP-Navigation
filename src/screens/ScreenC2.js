 
import * as React from 'react';
import { Button, TextInput, Text, View, StyleSheet } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import styles from '../styles/styles';


function ScreenC2() {
    const navigation = useNavigation();
    return (
      <View style={styles.homeScreen}>
        <Text style={styles.text}>CREATE 2</Text>
      </View>
    );
  }

export default ScreenC2
