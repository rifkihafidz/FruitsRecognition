import React from 'react';
import { About, Guide, Home, Scan, SplashScreen, TestPage } from '../pages';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name="About" component={About} options={{ headerShown: false }} />
      <Stack.Screen name="Guide" component={Guide} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Scan" component={Scan} options={{ headerShown: false }} />
      <Stack.Screen name="TestPage" component={TestPage} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default Router