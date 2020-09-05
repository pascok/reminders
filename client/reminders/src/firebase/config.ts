import * as firebase from 'firebase';
import '@firebase/auth';
import Config from 'react-native-config';
// import '@firebase/firestore';

declare const global: {HermesInternal: null | {}};

// Initialize Firebase
const firebaseConfig = {
  // TODO Setup env variables
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export {firebase};
