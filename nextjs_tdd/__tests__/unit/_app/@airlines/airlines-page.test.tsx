import AirlinePage from '@/app/@airlines/page';
import { COMMON_CONST } from '@/constants/app-constants';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Airlines Page', () => {
    test('should render Airlines Page properly', () => {
        render(<AirlinePage />);
        expect(screen.getByText(COMMON_CONST.CHOOSE_TO_FLY)).toBeInTheDocument();
    });
});
