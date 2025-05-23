import * as React from 'react';
import { Button, TextInput, Text, View, StyleSheet } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import styles from '../styles/styles';

function ScreenA2() {
    const navigation = useNavigation();
    return (
      <View style={styles.homeScreen}>
        <Text style={styles.text}>HOME 2</Text>
      </View>
    );
  }

export default ScreenA2
