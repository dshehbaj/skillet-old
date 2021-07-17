import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CenterView from './components/CenterView';

const Tab = createBottomTabNavigator();

const LikesView = () => {
  return (
    <CenterView>
      <Text>This is where you can see your liked recipes.</Text>
    </CenterView>
  )
};

const ExploreView = () => {
  return (
    <CenterView>
      <Text>This is where you can search recipes.</Text>
    </CenterView>
  )
};

const ProfileView = () => {
  return (
    <CenterView>
      <Text>This is where you can see your recipes.</Text>
    </CenterView>
  )
};

export default function App() {
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

