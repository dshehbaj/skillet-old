import React from 'react';
import { Appbar } from 'react-native-paper';

export default function ({ navigation, previous }) {
  return (
    <Appbar.Header>
      {previous ? <Appbar.BackAction onPress={navigation.goBack} color='white'/> : null}
      <Appbar.Content title='Skillet' color='white' />
    </Appbar.Header>
  )
};
