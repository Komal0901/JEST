import {Text, View} from 'react-native';
import React, {Component} from 'react';
import MyProp from '././src/components/MyProp';
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  getData(x) {
    const sum = x * 10;
    this.setState({counter: this.state.counter + sum});
    return sum; // here we retun sum which contains the final output after function  call,so that we dont have to pass manual output in test file.
  }
  render() {
    return (
      <View>
        <Text>{this.state.counter}</Text>
        <MyProp name={'Komal'} age={22} />
      </View>
    );
  }
}

export default App;
