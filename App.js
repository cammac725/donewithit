import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen'

export default function App() {

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}  
    >
      <View style={{
        backgroundColor: 'lightblue',
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'royalblue',
        borderRadius: 10,
      }}></View>
    </View>
  )
}


