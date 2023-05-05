import React, {useState} from 'react';
import {TextInput, Button, View, Text, Alert} from 'react-native';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [message, setMessage] = useState('');

  const handleInput = () => {
    if (!email || !password) {
      setMessage('All fields are required');
      console.log('Fields Empty logic runs!!');
      return false;
    }
    if (!email.includes('@')) {
      setMessage('Invalid Email');
      console.log('Invalid Email');
      return false;
    }

    if (password.length < 6) {
      setMessage('short password');
      console.log('short password');
      return false;
    }

    if (email && password && email.includes('@') && password.length >= 6) {
      Alert.alert('login Successfully');
      setMessage('login Successfully');
      console.log('login successfully');
      return true;
    }
  };

  return (
    <View>
      <TextInput placeholder="email" value={email} onChangeText={setEmail} />
      <TextInput
        placeholder="password"
        value={password}
        secureTextEntry={true}
        onChangeText={setPassword}
      />
      <Text>{message}</Text>
      <Button title="Login" onPress={handleInput} />
    </View>
  );
}
