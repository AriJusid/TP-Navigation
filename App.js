import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Button, TextInput, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import ScreenA1 from './src/screens/ScreenA1'
import ScreenA2 from './src/screens/ScreenA2';
import ScreenB1 from './src/screens/ScreenB1';
import ScreenB2 from './src/screens/ScreenB2';
import ScreenC1 from './src/screens/ScreenC1';
import ScreenC2 from './src/screens/ScreenC2';
import ScreenD1 from './src/screens/ScreenD1';
import ScreenD2 from './src/screens/ScreenD2';

const StackA = createNativeStackNavigator();
const StackB = createNativeStackNavigator();
const StackC = createNativeStackNavigator();
const StackD = createNativeStackNavigator();


function StackANavigator() {
  return (
    <StackA.Navigator>
      <StackA.Screen name="ScreenA1" component={ScreenA1} />
      <StackA.Screen name="ScreenA2" component={ScreenA2} />
    </StackA.Navigator>
  );
}

function StackBNavigator() {
  return (
    <StackB.Navigator>
      <StackB.Screen name="ScreenB1" component={ScreenB1} />
      <StackB.Screen name="ScreenB2" component={ScreenB2} />
    </StackB.Navigator>
  );
}
function StackCNavigator() {
  return (
    <StackC.Navigator>
      <StackC.Screen name="ScreenC1" component={ScreenC1} />
      <StackC.Screen name="ScreenC2" component={ScreenC2} />
    </StackC.Navigator>
  );
}

function StackDNavigator() {
  return (
    <StackD.Navigator>
      <StackD.Screen name="ScreenD1" component={ScreenD1} />
      <StackD.Screen name="ScreenD2" component={ScreenD2} />
    </StackD.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home"     component={StackANavigator} 
      options={{
        tabBarIcon: ({ color }) => (
          <Ionicons name="home" size={24} color={color} />
         ),
      }}
      />
      <Tab.Screen name="Explore" component={StackBNavigator} 
      options={{
        tabBarIcon: ({ color }) => (
          <Ionicons name="search" size={24} color={color} />
         ),
      }}
      />
      <Tab.Screen name="Perfil"   component={StackCNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={24} color={color} />
           ),
        }}
      />
      <Tab.Screen name="Ajustes" component={StackDNavigator} 
      options={{
        tabBarIcon: ({ color }) => (
          <Ionicons name="settings" size={24} color={color} />
         ),
      }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
