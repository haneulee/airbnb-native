import React, { useEffect } from "react";
import ExplorePresenter from "./ExplorePresenter";

export default ({ getRooms, rooms, page = 1 }) => {
    useEffect(() => {
        getRooms(page);
    }, []);
    return <ExplorePresenter rooms={rooms} />;
};