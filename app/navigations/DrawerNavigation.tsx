import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigator from './StackNavigation';
import AboutScreen from '../screens/About';
import SettingsScreen from '../screens/Settings';
import WithNavigation from './WithNavigation';


const Drawer = createDrawerNavigator();

// Drawer Navigator
const DrawerNavigator = () => (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={StackNavigator} />
      <Drawer.Screen name="About" component={AboutScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );

//   export default DrawerNavigator;
//  export default BottomNavigation;

export default WithNavigation(DrawerNavigator, {
    // Add your navigationOptions here
    headerShown: false,
  });