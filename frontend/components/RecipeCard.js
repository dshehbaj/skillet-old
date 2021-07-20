import React, {useState} from 'react';
import { Button, Card, Title, Paragraph } from 'react-native-paper';

export default function (props) {

  const [isLiked, setIsLiked] = useState(false);

  const ingredients = props.data.ingredients.map((ingredient) => {
    return ingredient.name;
  });

  const changeLikeStatus = () => {
    isLiked ? setIsLiked(false) : setIsLiked(true);
    //if isLiked, then unlike by setting isLike to false and vice versa
  };

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
      { //if props.actions then right side of && is returned
        props.actions &&
        <Card.Actions>
          {
            isLiked ?
            <Button icon="heart" onPress={changeLikeStatus} />
            :
            <Button icon="heart-outline" onPress={changeLikeStatus} />
          }
          <Button icon="book-open" onPress={() => props.openInfo(props.data)}/>
        </Card.Actions>
      }
    </Card>
  );
};
