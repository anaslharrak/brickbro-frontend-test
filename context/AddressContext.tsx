"use client"; 

import { createContext, useState } from "react";

interface AddressContextType {
    address: string | null;
    setAddress: (address: string) => void;
}

export const AddressContext = createContext<AddressContextType>({
    address: null,
    setAddress: () => {}
});

import { ReactNode } from "react";

export const AddressProvider = ({ children }: { children: ReactNode }) => {
    const [address, setAddress] = useState<string | null>(null);

    return (
        <AddressContext.Provider value={{ address, setAddress }}>
            {children}
        </AddressContext.Provider>
    );
};