import * as firebase from 'firebase';
import '@firebase/auth';
import {SecretConfig} from './secret';

declare const global: {HermesInternal: null | {}};

// Initialize Firebase
const firebaseConfig = {
  apiKey: SecretConfig.API_KEY,
  projectId: SecretConfig.PROJECT_ID,
  appId: SecretConfig.APP_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export {firebase};
