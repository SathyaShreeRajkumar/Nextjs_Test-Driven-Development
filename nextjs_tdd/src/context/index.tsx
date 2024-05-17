'use client';

import React, { Dispatch, SetStateAction, createContext, useContext, useState } from 'react';

type Place = {
    place: string;
};

type PlaceContextType = {
    selectCity: Place | undefined;
    setSelectCity: Dispatch<SetStateAction<Place | undefined>>;
};

const PlaceContext = createContext<PlaceContextType | undefined>(undefined);

export default function ContextWrapper({ children }: { children: React.ReactNode }) {
    const [selectCity, setSelectCity] = useState<Place | undefined>(undefined);
    return (
        <PlaceContext.Provider value={{ selectCity, setSelectCity }}>
            {children}
        </PlaceContext.Provider>
    );
}

export function usePlaceContext() {
    const context = useContext(PlaceContext);
    return context as PlaceContextType;
}
