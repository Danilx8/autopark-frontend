import { Link } from "react-router-dom";
import MainRouter from "../../app/routing";
import { useState } from "react";
import { LANDING_PATH, ABOUT_PATH, DRIVERS_PATH, VEHICLES_PATH, REGISTER_PATH } from "../../app/routing/config";
import styled from "styled-components";

const NavigationWrapper = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  box-sizing: border-box;
  height: 5rem;
`;

const LinkWrapper = styled(Link)`
  margin: 1rem 0;
  float: left;
  display: block;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  padding: 1rem 2rem;
  text-decoration: none;
`;

const ButtonWrapper = styled.button`
  float: right;
  font-size: 1.2rem;
  font-weight: 600;
  border: none;
  outline: none;
  box-sizing: border-box;
  border-radius: 1rem;
  padding: 1rem 2rem;
  margin: 1rem;
  min-width: 5rem;
  cursor: pointer;
  position: relative;
  text-decoration: none;
`;

const Container = styled.div`
  margin: 5rem 0;
  padding: 2rem 2rem;
  color: #000000;
  font-size: 1rem;
  position: fixed;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
`;

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<"dark" | "light">("light");

  const changeTheme = () => {
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    setCurrentTheme(newTheme);
  };

  const toggleAuthentication = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <>
      <NavigationWrapper>
        <LinkWrapper to={LANDING_PATH}>Главная</LinkWrapper>
        <LinkWrapper to={ABOUT_PATH}>О нас</LinkWrapper>
        <ButtonWrapper onClick={changeTheme}>Сменить тему</ButtonWrapper>
        {isLoggedIn ? (
          <>
            <LinkWrapper to={DRIVERS_PATH}>Водители</LinkWrapper>
            <LinkWrapper to={VEHICLES_PATH}>Автомобили</LinkWrapper>
            <ButtonWrapper onClick={toggleAuthentication}>Выйти</ButtonWrapper>
          </>
        ) : (
          <>
            <LinkWrapper to={REGISTER_PATH}>Зарегистрироваться</LinkWrapper>
            <ButtonWrapper onClick={toggleAuthentication}>Войти</ButtonWrapper>
          </>
        )}
      </NavigationWrapper>
      <Container>
        <MainRouter isLoggedIn={isLoggedIn} />
      </Container>
    </>
  );
};

export default Navbar;
