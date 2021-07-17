import React from 'react';
import { NavigationContainer, DefaultTheme as NavDefault } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider, DefaultTheme as PaperDefault } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

import LikesView from './screens/LikesView';
import ProfileView from './screens/ProfileView';
import ExploreView from './screens/ExploreView';

const colorPalette = {
  GLight1: '#B7EFC5',
  GLight2: '#92E6A7',
  GLight3: '#6EDE8A',
  GLight4: '#4AD66D', //Primary
  GLight5: '#2DC653',
  GDark1: '#25A244',
  GDark2: '#208B3A',
  GDark3: '#1A7431',
  GDark4: '#155D27',
  GDark5: '#10451D'
};

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
        <Tab.Navigator initialRouteName='Explore' tabBarOptions={{ showLabel: false }}>

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

