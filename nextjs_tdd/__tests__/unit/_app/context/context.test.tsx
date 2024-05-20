import ContextWrapper from '@/context';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { mockContextProps } from '../../../__fixtures__';

describe('Context Wrapper', () => {
    test('should render children properly', () => {
        const mockProps = mockContextProps;
        render(<ContextWrapper {...mockProps} />);

        const children = screen.getByText(mockProps.children);
        expect(children).toBeInTheDocument();
    });

});
