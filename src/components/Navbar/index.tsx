import { Link } from 'react-router-dom';
import MainRouter from '../../app/routing';
import { useState } from 'react';
import { LANDING_PATH, ABOUT_PATH, DRIVERS_PATH, VEHICLES_PATH, REGISTER_PATH, } from '../../app/routing/config';

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
                    {isLoggedIn ? (
                        <>
                            <Link to={DRIVERS_PATH}>Водители</Link>
                            <Link to={VEHICLES_PATH}>Автомобили</Link>
                            <button onClick={toggleAuthentication}>Выйти</button>
                        </>
                    ) : (
                        <>
                            <Link to={REGISTER_PATH}>Зарегистрироваться</Link>
                            <button onClick={toggleAuthentication}>Войти</button>
                        </>
                    )}
                </ul>
            </nav>
        </>
    );
}

export default Navbar;