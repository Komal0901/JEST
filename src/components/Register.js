import React, {useState} from 'react';
import {TextInput, Button, View, Text, Alert} from 'react-native';

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleInput = () => {
    if (!username || !password || !confirmPassword) {
      setMessage('All fields are required');
      console.log('Fields Empty logic runs!!');
      return false;
    }

    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      console.log('Passowrds not matched logic runs!!');
      return false;
    }

    if (
      username &&
      password &&
      confirmPassword &&
      password === confirmPassword
    ) {
      Alert.alert('Registered Successfully.');
      setMessage('Registered Successfully');
      console.log('Successfully logic runs!!');
      return true;
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        secureTextEntry={true}
        onChangeText={setPassword}
      />
      <TextInput
        placeholder="Confirm Password"
        value={confirmPassword}
        secureTextEntry={true}
        onChangeText={setConfirmPassword}
      />
      {message ? <Text>{message}</Text> : null}
      <Button title="Register" onPress={handleInput} />
    </View>
  );
}
