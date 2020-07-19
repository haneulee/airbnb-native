
import React, { useState } from "react";
import { Keyboard } from "react-native";
import ProfilePresenter from "./ProfilePresenter";
import { userLogout } from "../../../redux/usersSlice";
import { useDispatch } from "react-redux";

import api from "../../../api";

export default ({ token, email, firstName, lastName }) => {
    const dispatch = useDispatch();
    const logout = () => {
        dispatch(
            userLogout({})
        );
    }
    return (
        <ProfilePresenter
            logout={logout}
            email={email}
            firstName={firstName}
            lastName={lastName}
        />
    );
};