import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home, Profile } from '../screens/Main';


const DrawerNav = createDrawerNavigator();


const MainNavigation = () => {
  return (
    <DrawerNav.Navigator>
        <DrawerNav.Screen name="Home" component={Home} />
        <DrawerNav.Screen name="Profile" component={Profile} />
    </DrawerNav.Navigator>
  );
};

export default MainNavigation;
