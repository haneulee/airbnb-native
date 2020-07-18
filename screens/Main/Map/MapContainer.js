import React, { useState, useEffect, useRef } from "react";
import { Dimensions } from "react-native";
import MapPresenter from "./MapPresenter";
import api from "../../../api";

const { width, height } = Dimensions.get("screen");

export default ({ exploreRoom, token }) => {
    const mapRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [pos, setPos] = useState({});
    const [rooms, setRooms] = useState(exploreRoom);
    const onScroll = e => {
        const {
            nativeEvent: {
                contentOffset: { x }
            }
        } = e;
        const position = Math.abs(Math.round(x / width));
        setCurrentIndex(position);
        console.log(position)
    };
    const moveMap = () => {
        rooms[currentIndex] && rooms[currentIndex] && mapRef.current ?.animateCamera(
            {
                center: {
                    latitude: parseFloat(rooms[currentIndex].lat),
                    longitude: parseFloat(rooms[currentIndex].lng)
                }
            },
            { duration: 3000 }
        );
    };
    useEffect(() => {
        if (currentIndex !== 0) {
            moveMap();
        }
    }, [currentIndex]);
    const onRegionChangeComplete = async () => {
        try {
            const { northEast, southWest } = await mapRef.current ?.getMapBoundaries();
            console.log(northEast, southWest);
            const form = {
                ...(northEast && { north: northEast.latitude, east: northEast.longitude }),
                ...(southWest && { south: southWest.latitude, west: southWest.longitude }),
            };
            const { data } = await api.search(form, token);
            console.log(data)
            setRooms(data && data.results);
            setPos({
                lat: northEast.latitude - (northEast.latitude - southWest.latitude / 2),
                long: northEast.longitude - (northEast.longitude - southWest.longitude / 2),
            })

        } catch (e) {
            console.warn(e);
        }
    };
    return (
        <MapPresenter
            rooms={rooms}
            pos={pos}
            mapRef={mapRef}
            currentIndex={currentIndex}
            onScroll={onScroll}
            onRegionChangeComplete={onRegionChangeComplete}
        />
    );
};