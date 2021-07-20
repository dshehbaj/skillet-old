import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { API } from 'aws-amplify';
import RecipeCard from '../components/RecipeCard';
import CenterView from '../components/CenterView';

export default function ({ navigation, route }) {

  const { data } = route.params;

  const openInstructions = (data) => {
    navigation.navigate("Instructions", { data: data });
  };

  const openSimilar = (data) => {
    navigation.navigate("Similar", { data: data });
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <RecipeCard
          data={data}
          actions={false}
          openSimilar={openSimilar}
          openInstructions={openInstructions}
        />
        <CenterView>
          <Text>Here you can see information on {data.title}</Text>
        </CenterView>
      </ScrollView>
    </View>
  );
};
