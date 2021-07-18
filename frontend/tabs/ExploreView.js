import React from 'react';
import { Text } from 'react-native';
import CenterView from '../components/CenterView';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-paper';
import TopBar from '../components/TopBar';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <CenterView>
      <Text>Home Screen</Text>
      <Button
        onPress={() => navigation.navigate('Details')}
      >
        Go to Details
      </Button>
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
        header: (props) => <TopBar {...props} />
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};
