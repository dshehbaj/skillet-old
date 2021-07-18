import React from 'react';
import { NavigationContainer, DefaultTheme as NavDefault } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider, DefaultTheme as PaperDefault } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

import LikesView from './tabs/LikesView';
import ProfileView from './tabs/ProfileView';
import ExploreView from './tabs/ExploreView';
import colorPalette from './colors';

const theme = {
  ...PaperDefault,
  ...NavDefault,
  roundness: 2,
  colors: {
    ...PaperDefault.colors,
    ...NavDefault.colors,
    primary: colorPalette.GLight4,
    background: 'white',
    text: colorPalette.GLight4,
    placeholder: 'gray'
  }
}

const Tab = createBottomTabNavigator();

export default function () {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>

        <Tab.Navigator
          initialRouteName='Explore'
          tabBarOptions={{
            showLabel: false,
            activeTintColor: 'white',
            style: {
              backgroundColor: colorPalette.GLight4
            }
          }}
        >

          <Tab.Screen
            name='Likes'
            component={LikesView}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name='md-heart-outline' size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name='Explore'
            component={ExploreView}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name='search-outline' size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name='Profile'
            component={ProfileView}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name='person-circle-sharp' size={size} color={color} />
              ),
            }}
          />

        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

