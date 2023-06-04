import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigation';

// Main App Navigation
const AppMainNavigator = () => (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
  
  export default AppMainNavigator;