import 'react-native';
import React from 'react';
import App from '../../App';
import renderer from 'react-test-renderer';
import {render, fireEvent} from '@testing-library/react-native';

import Counter from './Counter';
test('Test render Snapshot', () => {
  const snapshot = renderer.create(<App />).toJSON();
  console.log(snapshot);
  expect(snapshot).toMatchSnapshot(); //match old code to new
});
// counter file test case

// describe('Counter', () => {
//   it('increments by 1 each time increment is pressed', () => {
//     const {getByTestId} = render(<Counter />);

//     const initialState = getByTestId('counter');
//     expect(initialState).not.toBeNull();

//     const increment = getByTestId('increment');
//     fireEvent.press(increment);

//     const oneState = getByTestId('counter');
//     expect(oneState).not.toBeNull();
//   });

//   // other tests...
// });
// test('function testing', () => {
//   const Appref = renderer.create(<App />).toJSON();
//   console.log('function:-------->>>>>', Appref);
//   const input = Appref.getData(2);
//   console.log(input);
//   //   expect(Appref.getData(2)).toEqual(20);
// });
