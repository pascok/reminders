import React from 'react';
import {firebase} from '../firebase/config';
import Login from "./Login";
import Register from "./Register";
import { Button, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import UserHomeComponent from './UserHomeComponent';
import SignOutComponent from './SignOutComponent';

const UserStack = createStackNavigator();

function UserComponent({navigation}) {
  return (
    <UserStack.Navigator
      initialRouteName={
        firebase.auth().currentUser?.email === undefined
          ? 'UserHome'
          : 'Signout'
      }>
      <UserStack.Screen name="UserHome" component={UserHomeComponent} />
      <UserStack.Screen name="Login" component={Login} />
      <UserStack.Screen name="Register" component={Register} />
      <UserStack.Screen name="Signout" component={SignOutComponent} />
    </UserStack.Navigator>
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

export default UserComponent;
