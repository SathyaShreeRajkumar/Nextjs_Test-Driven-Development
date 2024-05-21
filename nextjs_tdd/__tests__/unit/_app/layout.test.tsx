import RootLayout from '@/app/layout';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { mockChildrenProps } from '../../__fixtures__';

describe('RootLayout', () => {
    test('should render children, home, and airlines properly', () => {
        const mockProps = {
            children: <div>{mockChildrenProps.children}</div>,
            home: <div>{mockChildrenProps.home}</div>,
            airlines: <div>{mockChildrenProps.airlines}</div>
        };

        render(<RootLayout {...mockProps} />);

        const childrenProp = screen.getByText(mockChildrenProps.children);
        const homeProp = screen.getByText(mockChildrenProps.home);
        const airlinesProp = screen.getByText(mockChildrenProps.airlines);

        expect(childrenProp).toBeInTheDocument();
        expect(homeProp).toBeInTheDocument();
        expect(airlinesProp).toBeInTheDocument();
    });
});
