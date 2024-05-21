import Home from '@/app/@home/home';
import { COMMON_CONST } from '@/constants/app-constants';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { mockCity } from '../../../__fixtures__/home';
import ContextWrapper from '@/context';

describe('Page', () => {
    test('should render tittle properly', () => {
        render(
            <ContextWrapper>
                <Home />
            </ContextWrapper>
        );
        const cityPlaceholder = screen.getByPlaceholderText(COMMON_CONST.CITY_PLACEHOLDER);
        expect(cityPlaceholder).toBeInTheDocument();
    });

    test('should render placeholder properly', () => {
        render(
            <ContextWrapper>
                <Home />
            </ContextWrapper>
        );
        const cityPlaceholder = screen.getByPlaceholderText(COMMON_CONST.CITY_PLACEHOLDER);
        fireEvent.change(screen.getByPlaceholderText(COMMON_CONST.CITY_PLACEHOLDER), {
            target: { value: mockCity.city }
        });

        expect(cityPlaceholder).toHaveValue(mockCity.city);
    });
});
