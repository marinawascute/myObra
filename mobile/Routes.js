import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AuthScreen, Home } from './screens';

const Tab = createBottomTabNavigator();
export default function Routes() {
    return (
        <Tab.Navigator>
          <Tab.Screen name="Auth" component={AuthScreen} />
          <Tab.Screen name="Home" component={Home} />
        </Tab.Navigator>
    );
  }