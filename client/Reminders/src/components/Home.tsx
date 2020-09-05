import React from 'react';
import {Button} from 'react-native';
//import {NavigationContainer} from '@react-navigation/native';

//const Home = ({navigation: any}) => {
function Home({navigation}) {
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

export default Home;
