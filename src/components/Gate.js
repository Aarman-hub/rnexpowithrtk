import React, {useState} from "react";
import { Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { logIn, logOut } from '../rtk/usersSlice';


export default  () =>{
    const { isLoggedIn } = useSelector(state =>state.usersReducer);
    const dispatch = useDispatch();
    
    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            {isLoggedIn ? <Text>Welcome</Text> : <Text>Please LogIn</Text>}
        </View>
    );
};
