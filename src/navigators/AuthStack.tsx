import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import Authentication from '../screens/Auth/Authentication';

const Stack = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Authentication" component={Authentication} />
    </Stack.Navigator>
    </>
  )
}