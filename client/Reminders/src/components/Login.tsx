import React from 'react';
import {Text, Button, TextInput} from 'react-native';
import {firebase} from '../firebase/config';

//const Login = () => {
function Login({navigation}) {
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  const onLoginPress = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        navigation.navigate('Home');
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
      {/* <TouchableOpacity
        // style={styles.button}
        onPress={() => onLoginPress()}>
        <Text>Log in</Text>
      </TouchableOpacity> */}
      <Button title="Get auth" onPress={onLoginPress} />
    </>
  );
};

export default Login;
