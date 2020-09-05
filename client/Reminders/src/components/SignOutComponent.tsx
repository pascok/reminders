import React from 'react';
import {Button} from 'react-native';
import {firebase} from '../firebase/config';

function SignOutComponent({navigation}) {
  const onSignOutPress = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigation.navigate('Login');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Button title="Sign Out" onPress={onSignOutPress} />
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

// const styles = StyleSheet.create({
//   button: {
//     alignItems: "center",
//     backgroundColor: "#1E90FF",
//     margin: 10,
//     padding: 10,
//   },
// });

export default SignOutComponent;
