import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/components/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {firebase} from './src/firebase/config';
import UserComponent from './src/components/UserComponent';
import CreateTaskComponent from './src/components/CreateTaskComponenet';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={
          firebase.auth().currentUser?.email === undefined ? 'Login' : 'Home'
        }>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Add Task" component={CreateTaskComponent} />
        <Tab.Screen name="User" component={UserComponent} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
