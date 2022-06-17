import React from 'react';
import { FlatList } from 'react-native'

const message = [
  {
    id: 1,
    title: 'T1',
    description:: 'D1',
    image: require('../assets/mosh.jpg')
  },
  {
    id: 2,
    title: 'T2',
    description:: 'D2',
    image: require('../assets/mosh.jpg')
  }
]

function MessagesScreen(props) {
  return (
    <FlatList
      data={messages}
    />
  );
}

export default MessagesScreen;