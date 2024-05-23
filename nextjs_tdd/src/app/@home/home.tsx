'use client';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select';
import { SELECT_CONST } from '@/constants/app-constants';
import PLACES from '@/constants/places.json';
import { PlaceContext } from '@/context';
import { useContext } from 'react';
import { SELECT_PLACE_TEST_ID } from '../../../__tests__/__utils__/test-constants';

export default function Home() {
    const { setSelectFrom, setSelectTo } = useContext(PlaceContext);

    return (
        <div className="flex gap-10 pt-10">
            <label data-testid={SELECT_PLACE_TEST_ID.FROM_LABEL} className="font-bold">
                {SELECT_CONST.SELECT_FROM}
            </label>
            <Select
                onValueChange={(value) => {
                    setSelectFrom(value);
                }}
            >
                <SelectTrigger
                    data-testid={SELECT_PLACE_TEST_ID.OPTIONS}
                    className="w-64 outline-none border border-black"
                >
                    <SelectValue
                        data-testid={SELECT_PLACE_TEST_ID.FROM_PLACEHOLDER}
                        placeholder={SELECT_CONST.SELECT_FROM}
                    />
                </SelectTrigger>
                <SelectContent>
                    {PLACES.map((place, index) => (
                        <SelectItem key={index} value={place.name}>
                            {place.name}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
            <label data-testid={SELECT_PLACE_TEST_ID.TO_LABEL} className="font-bold">
                {SELECT_CONST.SELECT_TO}
            </label>
            <Select
                onValueChange={(value) => {
                    setSelectTo(value);
                }}
            >
                <SelectTrigger
                    data-testid={SELECT_PLACE_TEST_ID.OPTIONS}
                    className="w-64 outline-none border border-black"
                >
                    <SelectValue
                        placeholder={SELECT_CONST.SELECT_TO}
                        data-testid={SELECT_PLACE_TEST_ID.TO_PLACEHOLDER}
                    />
                </SelectTrigger>
                <SelectContent>
                    {PLACES.map((place, index) => (
                        <SelectItem key={index} value={place.name}>
                            {place.name}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
}
