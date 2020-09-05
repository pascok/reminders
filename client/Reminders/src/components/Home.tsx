import React from 'react';
import {Button, Text} from 'react-native';
import {firebase} from '../firebase/config';

//const Home = ({navigation: any}) => {
function Home({navigation}) {
  const getAuth = () => {
    console.log(firebase.auth().currentUser?.email ?? 'Not logged in.');
  };

  return (
    <>
      <Text>Landing Page</Text>
      <Button title="Get auth" onPress={getAuth} />
      {/* <Button title="Login" onPress={() => navigation.navigate('Login')} /> */}
      {/*
      <Button
        title="Register"
        onPress={() => navigation.navigate('Register')}
      /> */}
    </>
  );
}

export default Home;
