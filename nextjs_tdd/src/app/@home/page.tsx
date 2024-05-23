import { COMMON_CONST } from '@/constants/app-constants';
import Home from './home';
import ContextWrapper from '@/context';

export default function HomePage() {
    return (
        <>
            <h3>{COMMON_CONST.BOOK_AIRLINES}</h3>
            <ContextWrapper>
                <Home />
            </ContextWrapper>
        </>
    );
}
