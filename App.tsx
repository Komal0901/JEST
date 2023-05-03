import {Text, View} from 'react-native';
import React, {Component} from 'react';

export class App extends Component {
  getData(x: number) {
    return x * 10;
  }
  render() {
    return (
      <View>
        <Text>App</Text>
      </View>
    );
  }
}

export default App;
