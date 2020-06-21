import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { logIn, logOut } from "../redux/usersSlice";
import Auth from "../navigation/Auth";
import { NavigationContainer } from "@react-navigation/native";
import Main from "../navigation/Main";

export default () => {
    let { isLoggedIn } = useSelector(state => state.usersReducer);
    const dispatch = useDispatch();
    // isLoggedIn = false;
    console.log(isLoggedIn);

    return (
        <NavigationContainer>
            {isLoggedIn ? <Main /> : <Auth />}
        </NavigationContainer>
    );
};