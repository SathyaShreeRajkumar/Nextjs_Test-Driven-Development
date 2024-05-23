import Home from '@/app/@home/home';
import ContextWrapper from '@/context';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SELECT_PLACE_TEST_ID } from '../../../__utils__/test-constants';
import PLACES from '@/constants/places.json';

describe('Page', () => {
    test('should render label properly', () => {
        render(
            <ContextWrapper>
                <Home />
            </ContextWrapper>
        );
        const formLabel = screen.getByTestId(SELECT_PLACE_TEST_ID.FROM_LABEL);
        const toLabel = screen.getByTestId(SELECT_PLACE_TEST_ID.TO_LABEL);
        expect(formLabel).toBeInTheDocument();
        expect(toLabel).toBeInTheDocument();
    });

    test('should render placeholder properly', () => {
        render(
            <ContextWrapper>
                <Home />
            </ContextWrapper>
        );
        const fromPlaceholder = screen.getByTestId(SELECT_PLACE_TEST_ID.FROM_PLACEHOLDER);
        const toPlaceholder = screen.getByTestId(SELECT_PLACE_TEST_ID.TO_LABEL);

        expect(fromPlaceholder).toBeInTheDocument();
        expect(toPlaceholder).toBeInTheDocument();
    });

    test('should render select boarding properly', async () => {
        render(
            <ContextWrapper>
                <Home />
            </ContextWrapper>
        );

        const fromSelectElement = screen.getAllByTestId(SELECT_PLACE_TEST_ID.OPTIONS)[0];
        await userEvent.click(fromSelectElement);
        await waitFor(() => {
            const placeOption = screen.getAllByRole('option', {
                name: PLACES[0].name
            })[0];
            userEvent.click(placeOption);
        });

        const place = screen.getByText(PLACES[0].name);
        expect(place).toBeInTheDocument();
    });

    test('should render select dropping properly', async () => {
        render(
            <ContextWrapper>
                <Home />
            </ContextWrapper>
        );

        const toSelectElement = screen.getAllByTestId(SELECT_PLACE_TEST_ID.OPTIONS)[1];
        await userEvent.click(toSelectElement);
        await waitFor(() => {
            const placeOption = screen.getAllByRole('option', {
                name: PLACES[0].name
            })[0];
            userEvent.click(placeOption);
        });
        const place = screen.getByText(PLACES[0].name);
        expect(place).toBeInTheDocument();
    });
});
