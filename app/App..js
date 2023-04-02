import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen.js';
import MenuScreen from './menu_details.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Menu" component={MenuScreen} />
    </Stack.Navigator>
  );
}
