import React from 'react';
import { Button, Card, Title, Paragraph } from 'react-native-paper';

export default function (props) {

  const ingredients = props.data.ingredients.map((ing) => {
    return ing.name;
  });

  return (
    <Card style={{ margin: '5%', borderRadius: 20 }}>
      <Card.Content>
        <Title style={{textTransform: "capitalize"}}>
          {props.data.title}
        </Title>
        <Paragraph style={{textTransform: "capitalize"}}>
          {ingredients.join(", ")}
        </Paragraph>
      </Card.Content>
      <Card.Cover source={{ uri: props.data.image }} />
      <Card.Actions>
        <Button icon="book" />
        <Button icon="heart" />
      </Card.Actions>
    </Card>
  );
};
