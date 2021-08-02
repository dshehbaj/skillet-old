import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, Linking } from "react-native";
import { List, Button, Card, Title, Paragraph } from "react-native-paper";
import { API } from "aws-amplify";
import RecipeCard from "../components/RecipeCard";

export default function ({ navigation, route }) {
  const { data } = route.params;

  const [info, setInfo] = useState(null);
  const [steps, setSteps] = useState(null);

  const openInstructions = (data) => {
    navigation.navigate("Instructions", { data: data });
  };

  const openSimilar = (data) => {
    navigation.navigate("Similar", { data: data });
  };

  const getSteps = async () => {
    let result = await API.get("skillet", `/recipes/search/${data.id}`);
    setSteps(result);
  };

  const getInfo = async () => {
    let result = await API.get("skillet", `/recipes/info/${data.id}`);
    setInfo(result);
  };

  useEffect(() => {
    getSteps();
    getInfo();
    console.log(info);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <RecipeCard
          data={data}
          actions={false}
          openSimilar={openSimilar}
          openInstructions={openInstructions}
        />
        {info && (
          <Card style={{ margin: "5%", borderRadius: 5 }}>
            <Card.Content>
              <Paragraph style={{ textAlign: "center" }}>
                <Button icon="clock-time-ten">{info.time}</Button>
                <Button icon="account-multiple">{info.servings}</Button>
                <Button icon="currency-usd">
                  {(info.pricePerServing * info.servings) / 100}
                </Button>
              </Paragraph>
            </Card.Content>
          </Card>
        )}
        {info && (
          <List.Section style={{ margin: "5%", borderRadius: 5 }}>
            <List.Accordion title="Nutrients">
              {info.nutrients.map(({ name, amount, unit }) => {
                return <List.Item><Text>bruh</Text></List.Item>;
              })}
            </List.Accordion>
          </List.Section>
        )}
        <List.Section style={{ margin: "5%", borderRadius: 5 }}>
          <List.Accordion title="Ingredients">
            {data.ingredients.map(({ unit, amount, name, image }) => {
              return (
                <Card style={{ margin: "5%", borderRadius: 5 }}>
                  <Card.Content>
                    <Paragraph style={{ textTransform: "capitalize" }}>
                      {`${amount} ${unit} ${name}`}
                    </Paragraph>
                  </Card.Content>
                  <Card.Cover source={{ uri: image }} />
                </Card>
              );
            })}
          </List.Accordion>
        </List.Section>
        <Button onPress={() => Linking.openURL(info.source)}>Source</Button>
      </ScrollView>
    </View>
  );
}
