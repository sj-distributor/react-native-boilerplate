import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { DemoScreen } from '../screens/demo-screen/demo-screen';

export type HomeScreenParamList = {
  Demo: undefined;
};

const Stack = createNativeStackNavigator<HomeScreenParamList>();

export const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Demo" component={DemoScreen} />
    </Stack.Navigator>
  );
};
