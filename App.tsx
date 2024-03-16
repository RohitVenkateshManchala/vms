import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import { StatusBar } from 'react-native';
import EntryScreen from './src/screens/EntryScreen';
import ExitScreen from './src/screens/ExitScreen';
import QrScanner from './src/screens/QrScanner';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <NavigationContainer>
        <Stack.Navigator initialRouteName='LoginScreen'>
          <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="EntryScreen" component={EntryScreen} options={{ headerShown: false }} />
          <Stack.Screen name="ExitScreen" component={ExitScreen} options={{ headerShown: false }} />
          <Stack.Screen name="QrScanner" component={QrScanner} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
