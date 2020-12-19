import React, { useState } from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Title from "./title";
import Footer from "./module-footer";
import Chat from "./chat";
import Nav from "./nav";
import MarsLink from "./link";
import PageError from "./page-error";
import PageVC from "./page-vc";
import Link from "./link";

import PageHome from "./page-home";

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

      <NavContainer> 
        <NavItem onClick={() => setRoute("Home")}>Home</NavItem>
        <NavItem onClick={() => setRoute("Solutions")}>Solutions</NavItem>
        <NavItem onClick={() => setRoute("About")}>About</NavItem>
        <NavItem onClick={() => setRoute("Assets")}>Assets</NavItem>
        <NavItem onClick={() => setRoute("Login")}>Login / Sign Up</NavItem>
      </NavContainer>
        {route === "Home" ? <PageHome /> : null}
        {route === "Solutions" ? <PageVC /> : null}
      <Footer />
      <Chat />
    </>
  );
};

export default connect(Theme);

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
`;

const NavItem = styled.div`
  padding: 0;
  margin: 0 16px;
  color: #314452;
  font-size: 0.9em;
  box-sizing: border-box;
  flex-shrink: 0;

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

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;

    &:after {
      content: "";
      display: inline-block;
      width: 24px;
    }
  }
`;
