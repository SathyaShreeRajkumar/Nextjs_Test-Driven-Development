import type { Metadata } from 'next';
import './globals.css';
import ContextWrapper from '@/context';

export const metadata: Metadata = {
    title: 'Airline Booking'
};

export default function RootLayout({
    children,
    home,
    airlines
}: Readonly<{
    children: React.ReactNode;
    home: React.ReactNode;
    airlines: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <ContextWrapper>
                    {children}
                    {home}
                    {airlines}
                </ContextWrapper>
            </body>
        </html>
    );
}
