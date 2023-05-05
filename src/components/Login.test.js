import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Login from './Login';
describe('Form testing', () => {
  it('if all fields are empty ', () => {
    const {getByText} = render(<Login />);

    const btn = getByText('Login');

    fireEvent.press(btn);

    expect(getByText('All fields are required')).not.toBeNull();
  });

  test('if email is invalid', () => {
    const {getByPlaceholderText, getByText} = render(<Login />);

    const email = getByPlaceholderText('email');
    const pass = getByPlaceholderText('password');
    const btn = getByText('Login');

    fireEvent.changeText(email, 'komal');
    fireEvent.changeText(pass, '123456');
    fireEvent.press(btn);
    expect(getByText('Invalid Email')).not.toBeNull();
  });
  test('if password is too short', () => {
    const {getByPlaceholderText, getByText} = render(<Login />);

    const email = getByPlaceholderText('email');
    const pass = getByPlaceholderText('password');
    const btn = getByText('Login');
    fireEvent.changeText(email, 'Komal@');
    fireEvent.changeText(pass, '123');
    fireEvent.press(btn);
    expect(getByText('short password')).not.toBeNull();
  });
  test('if login successfull', () => {
    const {getByPlaceholderText, getByText} = render(<Login />);

    const email = getByPlaceholderText('email');
    const pass = getByPlaceholderText('password');
    const btn = getByText('Login');
    fireEvent.changeText(email, 'Komal@');
    fireEvent.changeText(pass, '123456');
    fireEvent.press(btn);
    expect(getByText('login Successfully')).not.toBeNull();
  });
});
