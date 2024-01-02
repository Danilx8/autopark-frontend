import { Link } from 'react-router-dom';
import MainRouter from '../../app/routing';
import React, { useState } from 'react';
import { LANDING_PATH, ABOUT_PATH, DRIVERS_PATH, VEHICLES_PATH, } from '../../app/routing/config';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const toggleAuthentication = () => {
        setIsLoggedIn(!isLoggedIn);
    }

    return (
        <>
            <MainRouter isLoggedIn={isLoggedIn} />
            <nav>
                <ul>
                    <Link to={LANDING_PATH}>Главная</Link>
                    <Link to={ABOUT_PATH}>О нас</Link>
                    { isLoggedIn ? (
                        <>
                        <Link to={DRIVERS_PATH}>Водители</Link>
                        <Link to={VEHICLES_PATH}>Автомобили</Link>
                        </>
                    ) : (<></>) }
                    { isLoggedIn ? (
                        <button onClick={toggleAuthentication}>Выйти</button>
                    ) : (
                        <button onClick={toggleAuthentication}>Войти</button>
                    )}
                </ul>
            </nav>
        </>
    );
}

export default Navbar;