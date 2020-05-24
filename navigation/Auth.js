import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform, View } from "react-native";
import Welcome from "../screens/Auth/Welcome";
import SignIn from "../screens/Auth/SignIn";
import SignUp from "../screens/Auth/SignUp";
import { Ionicons } from "@expo/vector-icons";
import BackBtn from "../components/Auth/BackBtn";

const Auth = createStackNavigator();

const isAndroid = Platform.OS === 'andoroid';

export default () => (
    <Auth.Navigator
        mode="modal"
        screenOptions={{
            headerBackTitleVisible: false,
            headerTransparent: true,
            headerBackImage: () => <BackBtn />
        }}
    >
        <Auth.Screen
            name="Welcome"
            component={Welcome}
            options={{
                headerTitleStyle: {
                    color: "white"
                }
            }}
        />
        <Auth.Screen
            name="SignIn"
            component={SignIn}
            options={{ title: "Sing In" }}
        />
        <Auth.Screen
            name="SignUp"
            component={SignUp}
            options={{ title: "Sing Up" }}
        />
    </Auth.Navigator>
);