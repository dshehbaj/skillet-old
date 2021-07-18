import React from 'react';
import { Text } from 'react-native';
import CenterView from '../components/CenterView';
import { createStackNavigator } from '@react-navigation/stack';
import { Appbar, Button } from 'react-native-paper';

const Stack = createStackNavigator();

function CustomNavigationBar({ navigation, previous }) {
  return (
    <Appbar.Header>
      {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title="Skillet" />
    </Appbar.Header>
  );
}

function HomeScreen({ navigation }) {
  return (
    <CenterView>
      <Text>Home Screen</Text>
      <Button
        title="Go to details"
        onPress={() => navigation.navigate('Details')}
      />
    </CenterView>
  );
}

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
        header: (props) => <CustomNavigationBar {...props} />
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};
