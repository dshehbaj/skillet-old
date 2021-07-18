import React from 'react';
import { Text, View } from 'react-native';
import CenterView from '../components/CenterView';
import { createStackNavigator } from '@react-navigation/stack';
import TopBar from '../components/TopBar';
import SearchScreen from '../screens/SearchScreen';

const Stack = createStackNavigator();

function DetailsScreen() {
  return (
    <CenterView>
      <Text>Details Screen</Text>
    </CenterView>
  );
}

export default function ({}) {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: (props) => <TopBar {...props} />
      }}
    >
      <Stack.Screen name="Home" component={SearchScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};
