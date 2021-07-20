import React from 'react';
import { Text, View } from 'react-native';
import CenterView from '../components/CenterView';
import { createStackNavigator } from '@react-navigation/stack';
import TopBar from '../components/TopBar';
import SearchScreen from '../screens/SearchScreen';

const Stack = createStackNavigator();

function PlaceholderScreen() {
  return (
    <CenterView>
      <Text>Placeholder Screen</Text>
    </CenterView>
  );
}

function Information({ navigation, route }) {
  const { data } = route.params;
  return (
    <CenterView>
      <Text>Here you can see information for {data.title}</Text>
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
      <Stack.Screen name="Explore" component={SearchScreen} />
      <Stack.Screen name="Information" component={Information} />
      <Stack.Screen name="Instructions" component={PlaceholderScreen} />
      <Stack.Screen name="Similar" component={PlaceholderScreen} />
    </Stack.Navigator>
  );
};
