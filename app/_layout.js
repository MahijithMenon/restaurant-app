import React from 'react';
import { useLinking } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './index';
import MenuDetails from './Menu_details';

const Stack = createStackNavigator();

const prefix = Linking.makeUrl('/');

const linking = {
  prefixes: [prefix],
  config: {
    screens: {
      Home: 'Home',
      MenuDetails: {
        path: 'MenuDetails/:itemID',
        parse: {
          itemID: (itemID) => Number(itemID),
        },
      },
    },
  },
};

const App = () => {
  return (
    <NavigationContainer linking={linking} independent={true}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="MenuDetails"
          component={MenuDetails}
          options={{ title: 'Menu Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
