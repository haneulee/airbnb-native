import React, { useEffect } from "react";
import ExplorePresenter from "./ExplorePresenter";

export default ({ getRooms, rooms, page, increasePage, logout }) => {
    // useEffect(() => {
    //     getRooms(1);
    // }, []);
    useEffect(() => {
        // logout();
        getRooms(page);
    }, [page]);
    return <ExplorePresenter rooms={rooms} increasePage={increasePage} />;
};