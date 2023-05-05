import React, {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';

const MyComponent = () => {
  const [text, setText] = useState('Initial text');

  const myFunction = input => {
    if (input === 'update') {
      setText('New text');
    }
  };

  return (
    <>
      <Text testID="myText">{text}</Text>
      <TouchableOpacity testID="myButton" onPress={() => myFunction('update')}>
        <Text>Update Text</Text>
      </TouchableOpacity>
    </>
  );
};

export default MyComponent;
export {myFunction};
