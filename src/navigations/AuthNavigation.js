import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Welcome, Login, Register} from '../screens/Auth';


const AuthStack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <AuthStack.Navigator>
        <AuthStack.Screen name="Welcome" component={Welcome} />
        <AuthStack.Screen name="Login" component={Login} />
        <AuthStack.Screen name="Register" component={Register} />
    </AuthStack.Navigator>
  );
};


export default AuthNavigation;
