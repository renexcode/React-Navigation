import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import DetailsScreen from '../screens/Details';
import WithNavigation from './WithNavigation';


const Stack = createStackNavigator();
// Stack Navigator
const StackNavigator = () => (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );

//   export default StackNavigator;
//  export default BottomNavigation;
export default WithNavigation(StackNavigator, {
    // Add your navigationOptions here
    headerShown: false,
  });