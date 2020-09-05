import React from 'react';
import {Button, StyleSheet} from 'react-native';

function UserHomeComponent({navigation}) {
  return (
    <>
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
      <Button
        title="Register"
        onPress={() => navigation.navigate('Register')}
      />
    </>
  );
}

// <>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigation.navigate('Login')}>
//         <Text>Login</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button} onPress={() => {}}>
//         <Text>Register</Text>
//       </TouchableOpacity>
//       {/* {firebase.auth().currentUser ? } */}
//     </>

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#1E90FF",
    margin: 10,
    padding: 10,
  },
});

export default UserHomeComponent;
