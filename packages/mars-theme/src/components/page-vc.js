import React, { useState, useRef } from "react";
import { connect, styled } from "frontity";
import { useTranslation } from "react-i18next";
import { useMediaQuery, useMediaQueries } from "@react-hook/media-query";
import Accordion from "./component-accordion";
import "./i18n";

/* Images */
import vcHeroBg from "../img/vc-hero.jpg";
import barsIcon from "../img/icon-bars.png";
import cardIcon from "../img/icon-card.png";
import globalIcon from "../img/icon-global.png";
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

const PageVC = ({ state }) => {
  const { t, i18n } = useTranslation();
  return (
    <VCContainer>
      <HeroContainer>
        <Title>
          Spend digital gold & silver anywhere with the <b>LODEpay</b> Virtual
          Card
        </Title>
        <HeroList>
          <li>Download the LODEpay Wallet</li>
          <li>Access Virtual Cards</li>
          <li>Spend AUX and AGX on Amazon, Apple, Nike & More!</li>
        </HeroList>
        <DownloadText>
          <DownloadTextWrapper>
            It’s that simple.
            <LightGrey>Get Your Card Now.</LightGrey>
          </DownloadTextWrapper>
          <DownloadButton src={downloadAppStore} />
          <DownloadButton src={downloadGooglePlay} />
        </DownloadText>
        <IconRow>
          <IconContainer>
            <IconIconLol src={barsIcon} />
            <IconText>
              Spend Gold <br />& Silver
            </IconText>
          </IconContainer>
          <IconContainer>
            <IconIconLol src={cardIcon} />
            <IconText>
              Withdraw <br />
              Cash
            </IconText>
          </IconContainer>
          <IconContainer>
            <IconIconLol src={globalIcon} />
            <IconText>MasterCard Privileges</IconText>
          </IconContainer>
          <IconContainer>
            <IconIconLol src={withdrawIcon} />
            <IconText>Send & Spend Globally</IconText>
          </IconContainer>
        </IconRow>
      </HeroContainer>
      <LoadContainer>
        <Title>
          <b>Load-up</b> in just a few steps
        </Title>
        <P>
          Spend your AGX and AUX Coins online or in-store on all your favorite
          brands.
        </P>
        <PrimaryButton>Create Account</PrimaryButton>
      </LoadContainer>
      <CheckoutsContainer>
      <RightImage src={checkoutImage} />
        <Title>Making your checkouts a whole lot shinier</Title>
        <P>
          Load virtual cards* with AGX & AUX straight from your LODEPay Wallet.
          <CheckoutsList>
            <li>Top-up fee: 3% </li>
            <li>Daily limit: US$500</li>
            <li>Holding limit: US$2,500</li>
          </CheckoutsList>
          <b>It’s time to get more out of your money.</b>
          <PrimaryButton>Settle with Metal</PrimaryButton>
        </P>
        <CheckoutDisclaimer>
          *The Virtual Card Program is only available in the U.S. right now,
          with plans to expand to new markets soon.
        </CheckoutDisclaimer>
        
      </CheckoutsContainer>
      <SpendingContainer>
        <LeftImage src={marketTiles} />
        <div>
          <Title>Start Spending Gold & Silver Instantly</Title>
          <P>
            Use LODEPay Virtual Cards on any online store that already accepts
            debit and credit cards.
          </P>
          <PrimaryButton>Spend Honest Money Now</PrimaryButton>
        </div>
        <LargeBgImage src={largeCircleBg} />
      </SpendingContainer>
      <FAQContainer>
        <Title>
          Questions? <br />
          <b>We have answers!</b>
        </Title>
        <Accordion
          title="Where can I use LODEPay Virtual Cards? "
          content="You can use the LODE Virtual Card for any online purchasing experience where cards are accepted"
        />
        <Accordion
          title="How can I get my virtual card set up?"
          content="Download the mobile wallet on IOS or Google and apply (The virtual program is only available to US citizens at this time"
        />
        <Accordion
          title="Are there any loading limits on the virtual cards?"
          content="The maximum load per day is $500 USD and a total card balance of $2000 at a given time."
        />
        <Accordion
          title="Is there a maximum amount I can hold on my virtual card?"
          content="there are no spending limits beyond what the hold balance allows"
        />
        <PrimaryButton>Get Your Card</PrimaryButton>
      </FAQContainer>
      <FutureContainer>
        <Title>The future of money starts here</Title>
        <P>
          Access your virtual cards and track purchases from one secure
          location: <br />
          the LODEPay Wallet.
        </P>
        <P>
          <b>
            Start building wealth with
            <br />
            honest money today!
          </b>
        </P>
        <Row>
          <DownloadButton src={downloadAppStore} />
          <DownloadButton src={downloadGooglePlay} />
        </Row>
      </FutureContainer>
    </VCContainer>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(PageVC);

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

const Row = styled.div`
  display: flex;

  ${mq[2]} {
    flex-direction: column;
  }
`;

const VCContainer = styled.div`
  color: #314452;
  font-family: "Rubik";
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



const HeroList = styled.ul`
  margin-top: 40px;
  font-size: 20px;
  font-weight: 300;
  & > li {
    margin-top: 10px;
  }
`;

const DownloadText = styled.div`
  margin-top: 75px;
  font-size: 22px;
  display: flex;
`;

const DownloadTextWrapper = styled.div`
  margin-right: 20px;
`;

const LightGrey = styled.div`
  color: #a5a5a5;
`;

const IconRow = styled.div`
  display: flex;
  max-width: 750px;
  justify-content: space-between;
  margin-top: 100px;
  margin-bottom: 220px;
`;

const IconContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const IconIconLol = styled.img`
  max-width: 82px;
`;

const IconText = styled.div`
  max-width: 120px;
  font-size: 16px;
  color: #9d9d9d;
  line-height: 22px;
  margin-top: 35px;
`;

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 300px;
  overflow: hidden;
  background-image: url(${vcHeroBg});
  background-repeat: no-repeat;
  ${mq[3]} {
    padding-left: 150px;
    background-position: -200px 0;
  }
  ${mq[2]} {
    background-image: none;
    background: #f2f0f3;
    padding-left: 100px;
    padding-right: 100px;
    ${DownloadText} {
      flex-direction: column;
      align-items: center;
      ${DownloadButton} {
        margin-top: 10px;
      }
    }
    ${IconRow} {
      padding-left: 50px;
      padding-right: 50px;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 50px;
      margin-bottom: 75px;

      ${IconContainer} {
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        min-width: 150px;
        max-width: 150px;
        text-align: center;
      }
    }
  }
  ${mq[1]} {
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

/* Load-up */

const LoadContainer = styled.div`
  background-image: url(${lodepayTilesBg});
  padding-left: 1000px;
  padding-bottom: 750px;
  background-position: -200px 190px;
  padding-top: 100px;
  background-repeat: no-repeat;
  ${Title} {
    margin-top: 250px;
    max-width: 360px;
    font-size: 50px;
  }
  ${mq[3]} {
    padding-left: 700px;
    background-size: 1320px;
    background-position: -50px -50px;
    padding-bottom: 400px;
    padding-top: 0;
    ${Title} {
      margin-top: 100px;
    }
  }
  ${mq[2]} {
    padding-left: 0px;
    background-image: none;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    text-align: center;
    max-width: 100%;
    margin-right: 0;
    padding-bottom: 150px;
    ${Title} {
      width: 100%;
      max-width: 100%;
    }
    & > p {
      padding-left: 50px;
      padding-right: 50px;
      max-width: 100%;
    }
  }
  ${mq[0]} {
    padding-left: 7%;
    max-width: calc(100vw - 14%);
    padding-right: 7%;
    ${Title} {
      font-size: 40px;
    }
  }
`;

const P = styled.p`
  font-size: 22px;
  max-width: 450px;
  font-weight: 300;
  margin-top: 40px;
  line-height: 30px;
`;

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

/* Checkouts */

const RightImage = styled.img``;

const CheckoutsList = styled.ul`
  margin-bottom: 40px;
  & > li {
    margin-top: 20px;
  }
`;

const CheckoutDisclaimer = styled.div`
  max-width: 400px;
  padding-bottom: 100px;
`;

const CheckoutsContainer = styled.div`
  padding-left: 300px;
  border-radius: 0 330px 0 0;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  position: relative;
  overflow: hidden;
  background: rgb(224, 224, 224);
  background: linear-gradient(
    180deg,
    rgba(224, 224, 224, 0.9) 0%,
    rgba(243, 243, 252, 0) 80%
  );
  ${PrimaryButton} {
    max-width: 500px;
    margin-bottom: 50px;
  }
  ${Title} {
    font-size: 48px;
    max-width: 500px;
    margin-top: 275px;
  }
  ${RightImage} {
    position: absolute;
    right: 30px;
    top: 180px;
  }
  ${mq[3]} {
    padding-left: 100px;
    ${RightImage} {
      width: 800px;
    }
  }
  ${mq[2]} {
    flex-direction: column;
    padding-left: 50px;
    padding-right: 50px;
    text-align: center;
    & li {
      list-style-type: none;
    }
    & ul {
      padding-left: 0;
    }
    ${Title} {
      margin-top: 75px;
      max-width: 100%;
    }
    ${P} {
      max-width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    ${RightImage} {
      position: relative;
      width: 100%;
      right: 0;
      top: 0;
      order: 0;
      padding-top: 75px;
      padding-right: 50px;
    }
    ${CheckoutDisclaimer} {
      padding-bottom: 75px;
      max-width: 100%;
    }
  }
  ${mq[0]} {
    padding-left: 7%;
    padding-right: 7%;
  }
  
`;



/* Spending */

const LeftImage = styled.img`
  padding-left: 100px;
`;

const LargeBgImage = styled.img`
  position: absolute;
  z-index: -1;
  width: 2073px;
  top: -800px;
  left: -810px;
`;

const SpendingContainer = styled.div`
  margin-top: 350px;
  margin-bottom: 200px;
  display: flex;
  position: relative;
  & > div {
    ${PrimaryButton} {
      max-width: 400px;
    }
    ${Title} {
      max-width: 400px;
      font-size: 45px;
    }
  }
  ${mq[3]} {
    ${LeftImage} {
      width: 600px;
      align-self: flex-start;
      padding-left: 25px;
      padding-right: 25px;
    }
    & > div {
      ${Title} {
        margin-top: 100px;
      }
    }
  }
  ${mq[2]} {
    display: flex;
    flex-direction: column;
    padding-left: 100px;
    padding-right: 100px;
    margin-top: 50px;
    text-align: center;
    & div { 
      ${P} {
        max-width: 100%;
      }
      ${Title} {
      max-width: 100%;
    }
  }
    ${LargeBgImage} {
      display: none;
    }
    ${LeftImage} {
      width: 100%;
      padding: 0;
    }
  }
  ${mq[0]} {
    padding-left: 7%;
    padding-right: 7%;
  }
`;



/* FAQ */

const FAQContainer = styled.div`
  padding-left: 300px;
  padding-right: 300px;
  ${Title} {
    border-bottom: 1px solid #707070;
    max-width: initial;
    padding-bottom: 40px;
  }
  ${PrimaryButton} {
    margin-top: 60px;
    margin-bottom: 100px;
  }
  ${mq[3]} {
    padding-left: 100px;
    padding-right: 100px;
  }
  ${mq[1]} {
    padding-left: 25px;
    padding-right: 25px;
  }
`;

/* The Future */

const FutureContainer = styled.div`
  background-image: url(${futureBg});
  color: white;
  padding-top: 280px;
  padding-bottom: 280px;
  padding-left: 300px;
  background-repeat: no-repeat;
  background-size: cover;
  ${Title} {
    max-width: 400px;
    font-size: 46px;
    margin-top: 0;
  }
  ${P} {
    line-height: 30px;
  }
  & ${Row} > ${DownloadButton} {
    filter: brightness(2);
    margin-top: 20px;
  }
  ${mq[2]} {
    padding-left: 100px;
  }
  ${mq[1]} {
    padding-left: 25px;
  }
  ${mq[0]} {
    padding-top: 100px;
  }
`;
