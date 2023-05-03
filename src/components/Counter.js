import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Text testID={'counter'}>Counter: 0</Text>
      <Button
        title="+"
        testID={'increment'}
        onPress={() => setCounter(counter + 1)}
      />
    </View>
  );
};

export default Counter;
