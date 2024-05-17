'use client';

import { COMMON_CONST } from '@/constants/app-constants';
import { usePlaceContext } from '@/context';

export default function Home() {
    const { selectCity, setSelectCity } = usePlaceContext();

    return (
        <div>
            <input
                placeholder={COMMON_CONST.CITY_PLACEHOLDER}
                className="border border-black"
                type="text"
                value={selectCity?.place || ''}
                onChange={(e) => setSelectCity({ place: e.target.value })}
            />
        </div>
    );
}
