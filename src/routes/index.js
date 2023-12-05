import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabsNav from './tabnav'
import LoginScreen from '../../views/screen/home/LoginScreen'

const Stack = createNativeStackNavigator();
export default function Routes() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name="Main" component={TabsNav} options={{ headerShown: false }}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
  )
}