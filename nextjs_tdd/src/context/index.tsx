'use client';

import React, { Dispatch, SetStateAction, createContext, useState } from 'react';

export type PlaceContextType = {
    selectCity: string;
    setSelectCity: Dispatch<SetStateAction<string>>;
};

export const PlaceContext = createContext<PlaceContextType>({
    selectCity: '',
    setSelectCity: () => {}
});

export default function ContextWrapper({ children }: { children: React.ReactNode }) {
    const [selectCity, setSelectCity] = useState('');
    return (
        <PlaceContext.Provider value={{ selectCity, setSelectCity }}>
            {children}
        </PlaceContext.Provider>
    );
}
