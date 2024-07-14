'use client'

import { useEffect, useState, useContext } from 'react';
import { AddressContext } from '../context/AddressContext';

export default function SearchHistory() {
    const [searchHistory, setSearchHistory] = useState<string[]>([]);
    const { setAddress } = useContext(AddressContext);


    const updateSearchHistory = () => {
        const storedSearchHistory = sessionStorage.getItem('searchHistory');
        if (storedSearchHistory) {
            setSearchHistory(JSON.parse(storedSearchHistory));
        } else {
            setSearchHistory([]);
        }
    };

    useEffect(() => {
        updateSearchHistory();

        const handleStorageChange = () => {
            updateSearchHistory();
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    return (
        <div className="w-full border border-solid border-gray-300 rounded-lg p-4">
            <h1 className="font-bold text-gray-500">Search history</h1>

            {searchHistory.length > 0 ? (
                searchHistory.map((address: string, index: number) => (
                    <p onClick={() => setAddress(address)} key={index} className="text-gray-400 cursor-pointer hover:text-blue-600">{address}</p>
                ))
            ) : (
                <p className="text-gray-400">No search history</p>
            )}
        </div>
    );
}
