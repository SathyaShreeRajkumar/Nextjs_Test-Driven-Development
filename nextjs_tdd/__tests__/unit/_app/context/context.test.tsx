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

    test('should able to get and updated current date', () => {
        const wrapper = ({ children }: { children: React.ReactNode }) => (
            <ContextWrapper>{children}</ContextWrapper>
        );

        const { result } = renderHook(() => useContext(PlaceContext), { wrapper });

        expect(result.current.selectCity).toEqual('');

        act(() => {
            result.current.setSelectCity(mockPlace.place);
        });

        expect(result.current.selectCity).toEqual(mockPlace.place);
    });
});
