'use client';

import { COMMON_CONST } from '@/constants/app-constants';
import ContextWrapper, { PlaceContext } from '@/context';
import { useContext } from 'react';

export default function Home() {
    const { selectCity, setSelectCity } = useContext(PlaceContext);

    return (
        <ContextWrapper>
            <input
                placeholder={COMMON_CONST.CITY_PLACEHOLDER}
                className="border border-black"
                type="text"
                value={selectCity.place}
                onChange={(e) => setSelectCity({ place: e.target.value })}
            />
        </ContextWrapper>
    );
}
