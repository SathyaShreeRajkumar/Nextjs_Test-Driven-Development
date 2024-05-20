'use client';

import React, { Dispatch, SetStateAction, createContext, useState } from 'react';

export type Place = {
    place: string;
};

export type PlaceContextType = {
    selectCity: Place;
    setSelectCity: Dispatch<SetStateAction<Place>>;
};

const defaultPlace: Place = { place: '' };

export const PlaceContext = createContext<PlaceContextType>({
    selectCity: defaultPlace,
    setSelectCity: () => {},
});

export default function ContextWrapper({ children }: { children: React.ReactNode }) {
    const [selectCity, setSelectCity] = useState<Place>(defaultPlace);
    return (
        <PlaceContext.Provider value={{ selectCity, setSelectCity }}>
            {children}
        </PlaceContext.Provider>
    );
}
