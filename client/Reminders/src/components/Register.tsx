import React from 'react';
import {Text, TouchableOpacity, TextInput} from 'react-native';
import {firebase} from '../firebase/config';

const Register = () => {
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [confirmPassword, onChangeConfirmPassword] = React.useState('');

  const onRegisterPress = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Text>Email: </Text>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => onChangeEmail(text)}
        value={email}
      />
      <Text>Password: </Text>
      <TextInput
        onChangeText={(text) => onChangePassword(text)}
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        value={password}
        secureTextEntry={true}
      />
      <Text>Confirm Password: </Text>
      <TextInput
        onChangeText={(text) => onChangeConfirmPassword(text)}
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        value={confirmPassword}
        secureTextEntry={true}
      />
      <TouchableOpacity
        // style={styles.button}
        onPress={() => onRegisterPress()}>
        <Text>Register</Text>
      </TouchableOpacity>
    </>
  );
};

export default Register;
