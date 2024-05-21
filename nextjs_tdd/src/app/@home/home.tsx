'use client';

import { COMMON_CONST } from '@/constants/app-constants';
import ContextWrapper, { PlaceContext } from '@/context';
import { useContext } from 'react';

export default function Home() {
    const { setSelectCity } = useContext(PlaceContext);

    return (
        <ContextWrapper>
            <input
                placeholder={COMMON_CONST.CITY_PLACEHOLDER}
                className="border border-black"
                type="text"
                onChange={(e) => setSelectCity(e.target.value)}
            />
        </ContextWrapper>
    );
}
