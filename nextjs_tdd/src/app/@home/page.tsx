import { COMMON_CONST } from '@/constants/app-constants';
import Home from './home';

export default function HomePage() {
    return (
        <>
            <h3>{COMMON_CONST.BOOK_AIRLINES}</h3>
            <Home />
        </>
    );
}
