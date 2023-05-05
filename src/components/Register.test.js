import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Register from './Register';

describe('RegistrationForm', () => {
  it('should display an error message when all fields are empty ', () => {
    // Here we are taking the getByText property out from the render method by rendering our component.
    const {getByText} = render(<Register />);

    // here we are getting the register button by its title prop, by using the getByText method.
    const registerButton = getByText('Register');

    // here we are firing the click event on the button which wil then trigger handleinput function and set the value to our ERROR useState variable.
    fireEvent.press(registerButton);

    // here we are expected the error 'All fields are required' ass of now our all inputFields are empty. and in handleInput function we have pass the condition where if any of the value is missing the setErrorMessage('All fields are required'). and getByText method will then search for that text which we are passing in out entire component. and if it will get the text value the our condition will passes successfully.
    //not.toBeNull() this methods means that this text should be there it will not receive the null value.
    expect(getByText('All fields are required')).not.toBeNull();
  });

  it('should display an error message when passwords do not match', () => {
    // Here we are taking the {getByPlaceholderText, getByText} 2 properties out from the render method by rendering our component.because here we also wanted to get the input fields values as well.
    // and will pass the values inside them to test our handleInput function Logic is working or not.
    const {getByPlaceholderText, getByText} = render(<Register />);

    // here we are getting the Username field by its placeholder prop.
    const usernameInput = getByPlaceholderText('Username');

    // here we are getting the Password field by its placeholder prop.
    const passwordInput = getByPlaceholderText('Password');

    // here we are getting the Confirm Password field by its placeholder prop.
    const confirmPasswordInput = getByPlaceholderText('Confirm Password');

    // here we are getting the Register button by its title prop.
    const registerButton = getByText('Register');

    // here we are firing the changeText event and it takes 2 arguments 1st the placeholder in wich we want to change the text. 2nd the text we want to put inside it.
    fireEvent.changeText(usernameInput, 'testuser');
    fireEvent.changeText(passwordInput, 'testpassword');
    fireEvent.changeText(confirmPasswordInput, 'testpasswords');

    // Here we are firing the press event because after firing the press event our handleInput function will ghet trigger and it will put the text inside out setMessage variable. and then we will check for the error by its text value.
    fireEvent.press(registerButton);

    // here we are expecting "Passwords do not match" error because we have input different password in both the password and confirm password field and our handleInput function has the logic if the both passwords are not matching then it is setting the Message to "Passwords do not match". and then we wil get this text in our component which will then pass out test case.
    expect(getByText('Passwords do not match')).not.toBeNull();
  });
  it('should  display an  message when registration is successful', () => {
    // Here we are taking the {getByPlaceholderText, getByText} 2 properties out from the render method by rendering our component.because here we also wanted to get the input fields values as well.
    // and will pass the values inside them to test our handleInput function Logic is working or not.
    const {getByPlaceholderText, getByText} = render(<Register />);
    const usernameInput = getByPlaceholderText('Username');
    const passwordInput = getByPlaceholderText('Password');
    const confirmPasswordInput = getByPlaceholderText('Confirm Password');
    const registerButton = getByText('Register');

    fireEvent.changeText(usernameInput, 'testuser');
    fireEvent.changeText(passwordInput, 'testpassword');
    fireEvent.changeText(confirmPasswordInput, 'testpassword');
    fireEvent.press(registerButton);

    // now here we are valodating our form as all fields are valid so we are setting the message variable to "Registered Successfully" this text and we will get this text so all our logics are working fine. and will let the form to submit and proceed further.
    // NOTE: it is important to display this MESSAGE variable value inside a TEXT component else it will not be able to find this Text in our component.
    expect(getByText('Registered Successfully')).not.toBeNull();
  });
});
