import ContextWrapper, { PlaceContext } from '@/context';

import '@testing-library/jest-dom';
import { render, renderHook, screen } from '@testing-library/react';
import { act, useContext } from 'react';
import { mockContextProps } from '../../../__fixtures__';
import { mockPlace } from '../../../__fixtures__/home';

describe('Context Wrapper', () => {
    test('should render children properly', () => {
        const mockProps = mockContextProps;
        render(<ContextWrapper {...mockProps} />);

        const children = screen.getByText(mockProps.children);
        expect(children).toBeInTheDocument();
    });

    test('should update the boarding state properly', () => {
        const wrapper = ({ children }: { children: React.ReactNode }) => (
            <ContextWrapper>{children}</ContextWrapper>
        );

        const { result } = renderHook(() => useContext(PlaceContext), { wrapper });

        expect(result.current.selectFrom).toEqual('');

        act(() => {
            result.current.setSelectFrom(mockPlace.place);
        });

        expect(result.current.selectFrom).toEqual(mockPlace.place);
    });

    test('should update the dropping state properly', () => {
        const wrapper = ({ children }: { children: React.ReactNode }) => (
            <ContextWrapper>{children}</ContextWrapper>
        );

        const { result } = renderHook(() => useContext(PlaceContext), { wrapper });

        expect(result.current.selectTo).toEqual('');

        act(() => {
            result.current.setSelectTo(mockPlace.place);
        });

        expect(result.current.selectTo).toEqual(mockPlace.place);
    });
});
