import React from 'react';
import Header from './Header';
import Nav from './Nav';

interface ILayoutProps {
    children?: React.ReactNode
}

export default function Layout({ children }: ILayoutProps) {
    return (
        <>
        {/* Navbar */}
        <Header />
        <Nav />
        {children}
        {/* Footer        */}
        </> 
    )
}
