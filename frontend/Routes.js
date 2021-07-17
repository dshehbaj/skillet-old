import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LikesView from './screens/LikesView';
import ProfileView from './screens/ProfileView';
import ExploreView from './screens/ExploreView';

const Tab = createBottomTabNavigator();

export default function () {
  return (
    <NavigationContainer>
      <Tab.Navigator detachInactiveScreens="Explore">
        <Tab.Screen name="Likes" component={LikesView}/>
        <Tab.Screen name="Explore" component={ExploreView}/>
        <Tab.Screen name="Profile" component={ProfileView}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

