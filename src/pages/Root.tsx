import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../layouts/Header';
import Menu from '../layouts/Menu';
import Sidebar from '../layouts/Sidebar';

function Root() {
    return (
        <>
        <Header />
        <main className="main-content">
            <Menu />
            <Outlet />
        </main>        
        <Sidebar />
        
        </>
    );
}

export default Root;