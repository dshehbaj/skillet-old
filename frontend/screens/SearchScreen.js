import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { View, ScrollView } from 'react-native';
import { API } from 'aws-amplify';
import MyCard from '../components/RecipeCard';

export default function ({ navigation }) {

  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const onChangeQuery = (query) => setQuery(query);

  const searchRecipes = async (query) => {
    let tokens = query.toLowerCase().split(' ');
    let result = []
    if (tokens.length != 0 && query.length != 0) {
      result = await API.post("skillet", "/recipes/search", {
        body: { ingredients: tokens, quantity: 10 }
      });
    }
    setRecipes(result);
  };

  return (
    <View>
      <Searchbar
        placeholder="Enter Ingredients"
        value={query}
        onChangeText={onChangeQuery}
        onSubmitEditing={() => searchRecipes(query)}
        style={{ margin: '5%', borderRadius:20 }}
      />
      <ScrollView style={{marginBottom: '20%'}}>
        {recipes.map((rec) => {
          return (<MyCard data={rec}/>)
        })}
      </ScrollView>
    </View>
  );
};
