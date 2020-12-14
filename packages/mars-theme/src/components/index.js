import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Title from "./title";
import Footer from "./module-footer";
import Chat from "./chat";
import PageError from "./page-error";

import PageHome from "./page-home";

// import i18n (needs to be bundled ;)) 
import './i18n';

const breakpoints = [576, 768, 992, 1720];

const mq = breakpoints.map(
  bp => `@media (max-width: ${bp}px)`
)

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link); 

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap');
        </style>
      </Head> 
      <Title /> 

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}

        <Switch>
          <PageHome />
        </Switch>
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
