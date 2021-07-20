import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { View, ScrollView } from 'react-native';
import { API } from 'aws-amplify';
import MyCard from '../components/RecipeCard';

export default function ({ navigation }) {

  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const openInfo = (data) => {
    navigation.navigate("Information", { data: data });
  };

  const searchRecipes = async (query) => {
    let result = [];
    if (query.length != 0) {
      result = await API.post("skillet", "/recipes/search", {
        body: { ingredients: query.toLowerCase().split(' '), quantity: 10 }
      });
    }
    setRecipes(result);
  };

  // flex: 1 needed for ScrollView
  return (
    <View style={{ flex: 1 }}>
      <Searchbar
        placeholder="Enter Ingredients"
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={() => searchRecipes(query)}
        style={{ margin: '5%', borderRadius:20 }}
      />
      <ScrollView>
        {recipes.map((rec) => {
          return (<MyCard data={rec} openInfo={openInfo} actions={true}/>)
        })}
      </ScrollView>
    </View>
  );
};
