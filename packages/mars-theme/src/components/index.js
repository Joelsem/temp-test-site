import React, { useState } from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Title from "./title";
import Footer from "./module-footer";
import Chat from "./chat";
import Nav from "./nav";
import PageError from "./page-error";
import PageVC from "./page-vc";
import PageAP from "./page-ap";
import PageAGX from "./page-agx.js";
import { CloseIcon, HamburgerIcon } from "./menu-icon";
import { StaticRouter as Router, Switch, Route, Link } from "react-router-dom";
import PageHome from "./page-home";

import lodeLogo from "../img/logo.svg"

// import i18n (needs to be bundled ;))
import "./i18n";

const breakpoints = [576, 768, 992, 1720];

const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ actions, children, link, state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  const [route, setRoute] = useState("Home");
  const { isMobileMenuOpen } = state.theme;
  const { menu } = state.theme;
  const isThereLinks = menu != null && menu.length > 0;

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap');
        </style>
      </Head>
      <Title />

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <LodeLogo src={lodeLogo} className="logo" />
      <NavContainer className={route}>
        <NavItem onClick={() => setRoute("Home")}>Home</NavItem>
        <NavItem onClick={() => setRoute("Solutions")}>Solutions</NavItem>
        <NavItem onClick={() => setRoute("AP")}>About</NavItem>
        <NavItem onClick={() => setRoute("AGX")}>Assets</NavItem>
        <NavItem onClick={() => setRoute("Login")}>Login / Sign Up</NavItem>
      </NavContainer>

      <MenuToggle onClick={actions.theme.toggleMobileMenu}>
        {isMobileMenuOpen ? (
          <>
            {/* Add some style to the body when menu is open,
            to prevent body scroll */}
            <Global styles={{ body: { overflowY: "hidden" } }} />
            <CloseIcon color="white" size="20px" style="top:0;" />
          </>
        ) : (
          <HamburgerIcon color="#314452" size="24px" />
        )}
      </MenuToggle>
      {/* If the menu is open, render the menu modal */}
      {isMobileMenuOpen && (
        <>
          <MenuOverlay />
          <MenuContent as="nav">
              <NavItem onClick={() => setRoute("Home")}>Home</NavItem>
              <NavItem onClick={() => setRoute("Solutions")}>Solutions</NavItem>
              <NavItem onClick={() => setRoute("AP")}>About</NavItem>
              <NavItem onClick={() => setRoute("AGX")}>Assets</NavItem>
              <NavItem onClick={() => setRoute("Login")}>
                Login / Sign Up
              </NavItem>
          </MenuContent>
        </>
      )}

      {route === "Home" ? <PageHome /> : null}
      {route === "Solutions" ? <PageVC /> : null}
      {route === "AP" ? <PageAP /> : null}
      {route === "AGX" ? <PageAGX /> : null}
      <Footer />
      <Chat />
    </>
  );
};

export default connect(Theme);

const LodeLogo = styled.img`
  position: absolute;
  left: 375px;
  top: 60px;
  ${mq[3]} {
    left: 100px;
  }
  ${mq[2]} {
    max-width: 25vw;
  }
  ${mq[1]} {
    left:50px;
  }
  ${mq[0]} {
    position: absolute;
    left: 50px;
  }
`;

const globalStyles = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`;

const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #1f38c5;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  background-image: linear-gradient(
    180deg,
    rgba(66, 174, 228, 0.1),
    rgba(66, 174, 228, 0)
  );
`;

const NavItem = styled.div`
  padding: 0;
  margin: 0 16px;
  color: #314452;
  font-size: 0.9em;
  box-sizing: border-box;
  flex-shrink: 0;
  cursor: pointer;

  & > a {
    display: inline-block;
    line-height: 2em;
    border-bottom: 2px solid;
    border-bottom-color: transparent;
    /* Use for semantic approach to style the current link */
    &[aria-current="page"] {
      font-weight: 500;
    }
  }

  &:hover {
    border-bottom: 2px solid #314452;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

const NavContainer = styled.nav`
  position: absolute;
  right: 325px;
  top: 80px;
  list-style: none;
  display: flex;
  width: 848px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 0 24px;
  margin: 0;
  overflow-x: auto;
  align-items: center;
  justify-content: flex-end;
  ${mq[3]} {
    right: 150px;
  }
  ${mq[2]} {
    display: none;
  }
  &.AP > ${NavItem} {
    color: white;
  }
`;

const MenuToggle = styled.button`
display: none;
  position: absolute;
  right: 84px;
  top: 84px;
  background: transparent;
  border: 0;
  color: #314452;
  z-index: 5;
  height: 40px;
  width: 40px;

  @media (max-width: 560px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ${mq[0]} {
    top: 63px;
    right: 50px;
    
  }
  ${mq[2]} {
    display: block;
  }
`;

const MenuOverlay = styled.div`
  background-color: #4a4e67;
  width: 100vw;
  height: 100vh;
  overflow: hidden auto;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
`;

const MenuContent = styled.div`
  z-index: 3;
  position: relative;
  ${NavItem} {
    margin-top: 10%;
    padding-left: 7%;
    padding-right: 7%;
    font-size: 30px;
    color:white;
  }
`;

const MenuLink = styled(Link)`
  width: 100%;
  display: inline-block;
  outline: 0;
  font-size: 20px;
  text-align: center;
  padding: 1.2rem 0;

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.05);
  }
  /* styles for active link */
  &[aria-current="page"] {
    color: yellow;
    font-weight: bold;
    /* border-bottom: 4px solid yellow; */
  }
`;
