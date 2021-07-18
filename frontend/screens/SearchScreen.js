import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { Text, View } from 'react-native';

export default function ({ navigation }) {
  const [query, setQuery] = useState('');
  const onChangeQuery = (query) => setQuery(query);
  const searchRecipes = (query) => alert(query.toLowerCase());

  return (
    <View>
      <Searchbar
        placeholder="Enter Ingredients"
        value={query}
        onChangeText={onChangeQuery}
        onSubmitEditing={() => searchRecipes(query)}
        style={{ margin: '5%', borderRadius:20 }}
      />
      <Text>Enter Ingredients</Text>
    </View>
  );
};
