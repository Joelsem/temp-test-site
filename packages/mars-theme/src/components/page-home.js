import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./module-hero";
import Borderless from "./module-borderless";
import TokenTrio from "./module-token-trio";
import Title from "./title";
import CommunityCards from "./module-community-cards";
import LodePay from "./module-lodepay";
import LodepayCards from "./module-lodepay-card";
import LCommunity from "./module-lcommunity";
import LMarkets from "./module-lmarkets";
import LMedia from "./module-lmedia";
import Footer from "./module-footer";
import Chat from "./chat";
import PageError from "./page-error";

const PageHome = ({ state }) => {
    // Get information about the current URL.
    const data = state.source.get(state.router.link); 
  
    return (
      <>
        <Header/>
        <Borderless />
        <TokenTrio />
        <CommunityCards />
        <LodePay />
        <LodepayCards />
        <LCommunity />
        <LMarkets />
        <LMedia />
      </>
    );
};

export default connect(PageHome);