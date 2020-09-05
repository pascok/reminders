/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Text, TouchableOpacity, TextInput} from 'react-native';
import {firebase} from './src/firebase/config';

const App = () => {
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  const onLoginPress = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Text>Login</Text>
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
      <TouchableOpacity
        // style={styles.button}
        onPress={() => onLoginPress()}>
        <Text>Log in</Text>
      </TouchableOpacity>
    </>
  );
};

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: 'black',
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: 'white',
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: 'gray',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: 'pink',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: 'pink',
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

export default App;
