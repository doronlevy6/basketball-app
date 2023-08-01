import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './components/LoginPage';
import WelcomePage from './components/WelcomePage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={LoginPage} />
        <Stack.Screen name='Welcome' component={WelcomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
