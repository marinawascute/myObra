import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './Routes';
import { NavigationContainer } from '@react-navigation/native';
import AuthScreen from './screens/AuthScreen';

export default function App(navigation) {
  return (
      <><NavigationContainer>
      <Routes navigation />
    </NavigationContainer></>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


