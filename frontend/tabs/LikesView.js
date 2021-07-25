import React from "react";
import { Text } from "react-native";
import CenterView from "../components/CenterView";
import { createStackNavigator } from "@react-navigation/stack";
import TopBar from "../components/TopBar";

const Stack = createStackNavigator();

const Placeholder = () => {
  return (
    <CenterView>
      <Text>This is where you can see your liked recipes.</Text>
    </CenterView>
  );
};

export default function ({}) {
  return (
    <Stack.Navigator
      initialRouteName="Placeholder"
      screenOptions={{
        header: (props) => <TopBar {...props} />,
      }}
    >
      <Stack.Screen name="Placeholder" component={Placeholder} />
    </Stack.Navigator>
  );
}
