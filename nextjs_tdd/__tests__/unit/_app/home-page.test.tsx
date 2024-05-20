import HomePage from '@/app/@home/page'
import { COMMON_CONST } from '@/constants/app-constants'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('HomePage', () => {
    test('should render Airlines Page properly', () => {
        render(<HomePage />)
        expect(screen.getByText(COMMON_CONST.BOOK_AIRLINES)).toBeInTheDocument()
    })
})
