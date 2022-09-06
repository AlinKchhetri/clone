import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Home, Timeline} from '../screens/index';

const Stack = createStackNavigator();

const MessageStack = () => {
  return (
    <Stack.Navigator initialRouteName='Messages' 
    screenOptions={{
        // headerShown: false,
        headerBackTitle: 'Back'
      }}
    >
      <Stack.Screen name="Messages" component={Home} />
      <Stack.Screen name="Timeline" component={Timeline} />
    </Stack.Navigator>
  );
}

export default MessageStack;