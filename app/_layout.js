import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './index';
import MenuDetails from './Menu_details';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer independent={true}>
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
