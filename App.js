import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import InitScreen from './src/screens/InitScreen';
import HomeScreen from './src/screens/HomeScreen';

import store from './src/store';

const Stack = createStackNavigator();

const NavigationContainerAndMore = () => {
  return (
    <NavigationContainer>
      <SafeAreaView />
      <Stack.Navigator>
        <Stack.Screen
          name="Init"
          component={InitScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainerAndMore />
    </Provider>
  );
};

export default App;
