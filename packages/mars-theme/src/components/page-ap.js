import React, { useState, useRef } from "react";
import { connect, styled } from "frontity";
import { useTranslation } from "react-i18next";
import { useMediaQuery, useMediaQueries } from "@react-hook/media-query";
import Accordion from "./component-accordion";
import "./i18n";

/* Images */
import apHeroBg from "../img/ap-hero-bg.jpg";
import earningBg from "../img/earning-bg-2.jpg";
import manageLeft from "../img/manage-left-image.png";
import manageBottom from "../img/manage-large-image.png";
import withdrawIcon from "../img/icon-withdraw.png";
import lodepayTilesBg from "../img/lodepay-tiles.jpg";
import checkoutImage from "../img/checkout-image.png";
import marketTiles from "../img/market-tiles.png";
import largeCircleBg from "../img/trio-background-circle.jpg";
import futureBg from "../img/background-future.jpg";
import downloadAppStore from "../img/download-app-store.png";
import downloadGooglePlay from "../img/download-google-play.png";

/* Breakpoints */
const breakpoints = [576, 768, 1320, 1720];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const PageAP = ({ state }) => {
  const { t, i18n } = useTranslation();
  return (
    <APContainer>
      <HeroContainer>
        <Title>
          Join the <br />
          <b>LODEpay</b> Affiliate <br /> Program today.
        </Title>
        <HeroList>
          <li>Earn AGX on every purchase made by your referrals </li>
          <li>Get payouts monthly </li>
          <li>Easily track your earnings like a pro</li>
        </HeroList>
        <B>Enable your network with Honest Money.</B>
        <TransparentButton>Become an Affiliate</TransparentButton>
      </HeroContainer>
      <RewardedContainer>
        <Title>
          Get <b>rewarded</b>* for helping others.
        </Title>
        <P>
          Focus on helping your network build their honest money portfolios,{" "}
          <b>we’ll handle the rest!</b>
        </P>
        <Disclaimer>*All rewards are paid out in AGX Coins. </Disclaimer>
        <Row>
          <Card>
            <CardHeader>One-off</CardHeader>
            <CardDesc>
              Every time a new member purchases a minimum of 200 AGX, get 4% of
              the margin on that sale.
            </CardDesc>
          </Card>
          <Card>
            <CardHeader>Monthly</CardHeader>
            <CardDesc>
              Every time a new member signs up for an AGX Subscription, you’ll
              get 4% of the margin on that sale every month.
            </CardDesc>
          </Card>
          <Card>
            <CardHeader>Bonus</CardHeader>
            <CardDesc>
              As your network starts growing, so will your earnings! Earn even
              more rewards as your network chain of referrals expands.
            </CardDesc>
          </Card>
        </Row>
        <PrimaryButton>Create Account</PrimaryButton>
        <RightImage src={largeCircleBg} />
      </RewardedContainer>
      <EarningContainer>
        <RightImage src={earningBg} />
        <Title>
          Start earning with <b>AGX.</b>{" "}
        </Title>
        <P>Want to get started? It’s as easy as 1-2-3.</P>

        <EarningList>
          <li>Open a LODEPay Account and login to the member’s portal</li>
          <li>Go to the “Affiliate” tab to get your “Referral link”.</li>
          <li>
            Share your unique link with your network via email directly from the
            member’s portal. You can also copy your link and share it by SMS,
            WhatsApp, social, or any platform of your choice.{" "}
          </li>
        </EarningList>
        <PrimaryButton>Activate Now</PrimaryButton>
      </EarningContainer>
      <ManageContainer>
        <Row>
          <LeftImage src={manageLeft} />
          <div>
            <Title>
              Manage your <b>earnings</b> like a pro.
            </Title>
            <P>
              Track your referrals and earnings on the go with the LODEPay
              Wallet.
              <br />
              <b>One wallet unlocking a world of honest money. </b>
            </P>
            <Row>
              <DownloadButton src={downloadAppStore} />
              <DownloadButton src={downloadGooglePlay} />
            </Row>
          </div>
        </Row>
        <LargeBottomImage src={manageBottom} />
        {/*<LargeBgImage src={largeCircleBg} />*/}
      </ManageContainer>
    </APContainer>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(PageAP);

/* Global */

const DownloadButton = styled.img`
  width: 188px;
  margin-right: 15px;
  cursor: pointer;
  ${mq[2]} {
    margin-bottom: 10px;
  }
  ${mq[0]} {
    width: 137px;
  }
`;

const P = styled.p``;

const Row = styled.div`
  display: flex;

  ${mq[2]} {
    flex-direction: column;
  }
`;

/* Hero */

const Title = styled.div`
  font-size: 60px;
  max-width: 750px;
  margin-top: 200px;
  font-weight: 300;
  ${mq[1]} {
    font-size: 40px;
  }
`;

const B = styled.b`
  display: block;
  font-size: 25px;
`;



const Disclaimer = styled.div``;

const HeroList = styled.ul`
  margin-top: 40px;
  font-size: 25px;
  font-weight: 300;
  max-width: 400px;
  & > li {
    margin-top: 10px;
  }
`;

const TransparentButton = styled.button`
  color: #314452;
  background: none;
  border: none;
  border-radius: 30px;
  padding: 18px 44px;
  max-width: 400px;
  border: 2px solid #314452;
  font-weight: 600;
  font-size: 20px;
  box-shadow: 0px 13px 20px #48484860;
  margin-top: 40px;
  cursor: pointer;
  margin-bottom: 300px;
`;

const APContainer = styled.div`
  color: #314452;
  font-family: "Rubik";
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-image: url(${apHeroBg});
  background-repeat: no-repeat;
  ${mq[3]} {
    background-position: -100px 0;
  }
  ${mq[2]} {
    background-position: -280px 0;
    
  }
  ${mq[1]} {
    background-image: none;
    background: #f2f0f3;
  }
  ${mq[0]} {
  }
  ${Title} {
    margin-top: 375px;
    ${mq[2]} {
      margin-top: 200px;
    }
  }
`;

const HeroContainer = styled.div`
  padding-left: 300px;
  padding-right: 300px;
  ${mq[2]} {
    padding-left: 100px;
    padding-right: 100px;
    ${TransparentButton} {
      margin-bottom: 100px;
    }
  }
  ${mq[0]} {
    padding-left:7%;
    padding-right:7%;
  }
`;

/* Rewarded */

const PrimaryButton = styled.button`
  color: #314452;
  background: white;
  border: none;
  border-radius: 30px;
  padding: 18px 44px;
  max-width: 240px;
  font-weight: 600;
  font-size: 20px;
  box-shadow: 0px 13px 20px #48484860;
  margin-top: 40px;
  cursor: pointer;
`;

const RightImage = styled.img``;

const Card = styled.div`
  padding: 40px;
  background: #36aaff;
  color: white;
  max-width: 400px;
  width: 400px;
  margin-left: 30px;
  margin-right: 30px;
  border-radius: 20px;
`;

const CardHeader = styled.div`
  font-size: 40px;
  border-bottom: 1px solid #003d6a40;
  padding-bottom: 30px;
`;

const CardDesc = styled.div`
  margin-top: 30px;
  font-size: 23px;
  line-height: 30px;
  font-weight: 300;
  opacity: 0.7;
`;

const RewardedContainer = styled.div`
  position: relative;
  padding-left: 300px;
  padding-right: 300px;
  padding-top: 100px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${Title} {
    margin-top: 250px;
    font-size: 50px;
    max-width: 100%;
  }
  ${P} {
    font-size: 22px;
    max-width: 500px;
    font-weight: 300;
    margin-top: 40px;
    line-height: 30px;
  }
  ${Disclaimer} {
  }
  ${Row} {
    margin-top: 75px;
    width: 100%;
    justify-content: space-between;
  }
  ${RightImage} {
    position: absolute;
    right: -640px;
    top: -240px;
    transform: scale(0.75);
    z-index: -1;
  }
  ${PrimaryButton} {
    margin-top: 75px;
    margin-bottom: 400px;
  }
  ${mq[3]} {
    padding-left: 100px;
    padding-right: 100px;
    background-size: 1320px;
    background-position: -50px -50px;
    padding-bottom: 200px;
    padding-top: 0;
    ${Title} {
      margin-top: 100px;
    }
    ${PrimaryButton} {
      margin-bottom: 200px;
    }
    ${RightImage} {
      z-index: -3;
    }
  }
  ${mq[2]} {
    padding-left: 50px;
    padding-right: 50px;
    background-image: none;
    text-align: center;
    max-width: 100%;
    margin-right: 0;
    padding-bottom: 0px;
    background: white;
    ${Row} {
      align-items: center;
    }
    ${Card} {
      max-width: 320px;
      margin-bottom: 40px;
    }
    ${Title} {
      width: 100%;
      max-width: 100%;
    }
    & > p {
      padding-left: 50px;
      padding-right: 50px;
      max-width: 100%;
    }
    ${PrimaryButton} {
      margin-bottom: 125px;
      margin-top: 0;
    }
    ${RightImage} {
      display: none;
    }
  }
  ${mq[0]} {
    padding-left:7%;
    padding-right:7%;
    ${Card} {
      max-width: 70vw;
    }
  }
`;

/* EarningContainer */

const LargeBgImage = styled.img``;

const EarningList = styled.ol`
  margin-bottom: 40px;

  & > li {
    margin-top: 20px;
    padding-left: 20px;
    line-height: 34px;
  }
`;

const EarningContainer = styled.div`
  padding-left: 300px;
  border-radius: 0 330px 0 0;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  position: relative;
  font-size: 22px;
  overflow: hidden;
  background: linear-gradient(
    180deg,
    rgb(249 249 249) 0%,
    rgba(243, 243, 252, 0) 100%
  );
  z-index: -1;
  ${PrimaryButton} {
    max-width: 350px;
    margin-bottom: 250px;
    z-index: 4;
  }
  ${Title} {
    font-size: 48px;
    max-width: 350px;
    margin-top: 275px;
  }
  ${RightImage} {
    max-height: 948px;
    max-width: 1034px;
    position: absolute;
    right: 12px;
    top: 40px;
  }
  ${EarningList} {
    max-width: 550px;
  }
  ${mq[3]} {
    padding-left: 100px;
    ${RightImage} {
      z-index: -1;
      max-width: 800px;
    }
    ${Title} {
      margin-top: 150px;
    }
    ${P} {
      max-width: 400px;
      font-size: 20px;
    }
    ${EarningList} {
      max-width: 400px;
      font-size: 20px;
      margin-top: 0;
      & > li {
        margin-top: 5px;
      }
    }
  }
  ${mq[2]} {
    flex-direction: column;
    padding-left: 50px;
    padding-right: 50px;
    text-align: center;
    z-index: initial;
    max-width: 100%;
    align-items: center;
    background: linear-gradient( 180deg,rgb(249 249 249) 0%,rgb(255 255 255) 100% );
    ${EarningList} {
      max-width: 600px;
      text-align: left;
      padding-left: 50px;
      margin-top: 20px;
    }
    & li {
      max-width: 100%;
    }
    & ul {
      padding-left: 0;
    }
    ${Title} {
      margin-top: 125px;
      max-width: 100%;
    }
    ${P} {
      max-width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 30px;
    }
  }
  ${mq[0]} {
    padding-left: 7%;
    padding-right: 7%;
  }
`;

/* Manage */

const LeftImage = styled.img`
  padding-left: 100px;
`;

const LargeBottomImage = styled.img``;

const ManageContainer = styled.div`
  margin-top: 200px;
  margin-bottom: 200px;
  display: flex;
  flex-direction: column;
  position: relative;

  ${LargeBottomImage} {
    align-self: center;
    position: relative;
    top: -99px;
  }

  & > div {
    ${LeftImage} {
      align-self: flex-start;
      margin-right: -100px;
    }

    & > div {
      ${Title} {
        max-width: 400px;
        font-size: 45px;
        margin-bottom: 40px;
        margin-top: 200px;
      }
      ${P} {
        font-weight: 300;
        max-width: 450px;
        font-size: 25px;
        & > b {
          display: block;
          margin-top: 40px;
        }
      }
    }
    ${LargeBgImage} {
      position: absolute;
      z-index: -1;
      width: 2073px;
      top: -800px;
      left: -810px;
    }
  }
  ${mq[3]} {
    margin-top: 100px;
    margin-bottom: 100px;
    ${LeftImage} {
      align-self: flex-start;
      padding-left: 25px;
      padding-right: 25px;
      position: relative;
      left: -100px;
      max-width: 70vw;
    }
    ${Row} {
      & > div {
        position: relative;
        left: -150px;
        ${Title} {
          margin-top: 100px;
        }
      }
    }
    ${LargeBottomImage} {
      max-width:100vw;
    }
  }
  ${mq[2]} {
    display: flex;
    flex-direction: column;
    padding-left: 0px;
    margin-top: 0px;
    text-align: center;
    background: white;
    align-items: center;
    margin-bottom: 0;
    padding-left: 50px;
    padding-right: 50px;
    ${LargeBottomImage} {
      display:none;
    }
    ${Row} {
      & > div {
        left: 0;
        ${P} {
          max-width: 100%;
        }
        ${Title} {
          max-width: 100%;
        }
        ${Row} {
          flex-direction: row;
          justify-content: center;
          margin-top: 30px;
        }
      }
      ${LeftImage} {
        width: 100%;
        padding: 0;
        order:1;
        margin-right: 0;
        left:0;
        align-self: center;
      }
    }
    ${LargeBgImage} {
      display: none;
    }
    
  }
  ${mq[0]} {
    padding-left: 7%;
    padding-right: 7%;
  }
`;
