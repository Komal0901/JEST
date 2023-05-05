import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../../App';
import {globalfun} from './Globalfun';

import MyProp from './MyProp';
import {FlatList, Text} from 'react-native';

// //----- testing of function(getData()) of class component
// test('function testing', () => {
//   const AppRef = renderer.create(<App />).getInstance();
//   const input = AppRef.getData(2);
//   console.log('App component Output======>>>> ', input);
//   expect(AppRef.getData(2)).toBe(20);
// });

// //-------State testing of class component
// it('state testing', () => {
//   const stateres = renderer.create(<App />).getInstance();
//   const res = stateres.getData(20);
// // here we directly compare the expected output with the 'res' beacaus res contains the final result of function
//   expect(stateres.state.counter).toEqual(res);
// });
////---------testing the global function
// describe('globalfunc', () => {
// test('test global func', () => {
//   const output = globalfun(200);
//   expect(globalfun(200)).toBe(output);
// });
// });

// now testing props of MyProp component using class components
// test('Props testing ', () => {
//   const AppRef = renderer.create(<MyProp name="Komal" />).getInstance();
//   console.log(AppRef.props.name);
//   expect(AppRef.props.name).toBe('aksh');
// });

//----------testing of props of Myprop component  using functional component
// test('functional component props', () => {
//   const PropRef = renderer.create(<MyProp name={'komal'} age={22} />).toJSON();
//   const [child1, child2] = PropRef.children;
//   const [name] = child1.children;
//   const [age] = child2.children;
//   console.log(name, age);
//   expect(name).toBe('komal');
//   expect(age).toBe('22');
// });
test('flatlist here created and test', () => {
  const tree = renderer.create(
    <FlatList
      data={['item1', 'item2', 'item3']}
      renderItem={({item}) => <Text>{item}</Text>}
      keyExtractor={item => item}
    />,
  );
  expect(tree).toMatchSnapshot();
});
