import {View, Text} from 'react-native';
import React from 'react';

const MyProp = ({name, age}) => {
  return (
    <View>
      <Text>{name}</Text>
      <Text>{age}</Text>
    </View>
  );
};

export default MyProp;
// //

// import {Text, View} from 'react-native';
// import React, {Component} from 'react';

// export class MyProp extends Component {
//   constructor(props) {
//     super();
//   }
//   render() {
//     return (
//       <View>
//         <Text>{this.props.name}</Text>
//       </View>
//     );
//   }
// }

// export default MyProp;
