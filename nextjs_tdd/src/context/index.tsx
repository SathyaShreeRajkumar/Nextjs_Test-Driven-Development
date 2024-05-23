'use client';

import React, { Dispatch, SetStateAction, createContext, useState } from 'react';

export type PlaceContextType = {
    selectFrom: string;
    selectTo: string;
    setSelectFrom: Dispatch<SetStateAction<string>>;
    setSelectTo: Dispatch<SetStateAction<string>>;
};

export const PlaceContext = createContext<PlaceContextType>({
    selectFrom: '',
    setSelectFrom: () => {},
    selectTo: '',
    setSelectTo: () => {}
});

export default function ContextWrapper({ children }: { children: React.ReactNode }) {
    const [selectFrom, setSelectFrom] = useState('');
    const [selectTo, setSelectTo] = useState('');
    return (
        <PlaceContext.Provider value={{ selectFrom, setSelectFrom, selectTo, setSelectTo }}>
            {children}
        </PlaceContext.Provider>
    );
}
