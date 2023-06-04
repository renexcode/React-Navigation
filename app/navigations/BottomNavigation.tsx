import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTab1 from '../screens/BottomTab1';
import BottomTab2 from '../screens/BottomTab2';
import BottomTab3 from '../screens/BottomTab3';
import WithNavigation from './WithNavigation';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => (

    <BottomTab.Navigator>
      <BottomTab.Screen name="Tab1" component={BottomTab1} />
      <BottomTab.Screen name="Tab2" component={BottomTab2} />
      <BottomTab.Screen name="Tab3" component={BottomTab3} />
    </BottomTab.Navigator>

  );

//   export default BottomTabNavigator;
//  export default BottomNavigation;

export default WithNavigation(BottomTabNavigator, {
    // Add your navigationOptions here
    headerShown: false,
  });