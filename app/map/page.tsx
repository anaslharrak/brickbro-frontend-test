'use client'

import { AddressContext } from "../../context/AddressContext";
import { useEffect, useContext, useState } from "react";
import { MapComponent } from "../../components/exports";
import { API_KEY } from "../constants";
import { SearchButtonAndInput, BrickBroLogo, SearchHistory } from "../../components/exports";

export default function Map() {
    const { address } = useContext(AddressContext);
    const [position, setPosition] = useState({ lat: 0, lng: 0 });
    const [loading, setLoading] = useState(true);

    const encodedAddress = encodeURIComponent(address as string);
    const URL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${API_KEY}`;

    useEffect(() => {
        setLoading(true);
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                setPosition(data.results[0].geometry.location);
                setLoading(false);

                const storedSearchHistory = sessionStorage.getItem('searchHistory');
                const searchHistory = storedSearchHistory ? JSON.parse(storedSearchHistory) : [];

                if (!searchHistory.includes(address)) {
                    sessionStorage.setItem('searchHistory', JSON.stringify([...searchHistory, address]));
                    window.dispatchEvent(new Event('storage'));
                }
            })
            .catch(error => {
                console.error('Error fetching the geocode data:', error);
                setLoading(false);
            });
    }, [URL, address]);

    return (
        <div className="flex flex-col gap-8 justify-center items-center">
            <BrickBroLogo isCentered={false} />
            <SearchButtonAndInput />
            {loading ? <p className="text-2xl">Loading...</p> : <MapComponent position={position} />}
            <SearchHistory />
        </div>
    );
}
