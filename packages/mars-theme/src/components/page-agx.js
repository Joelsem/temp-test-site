import React, { useState, useRef } from "react";
import { connect, styled } from "frontity";
import { useTranslation } from "react-i18next";
import "./i18n";

/* Images */
import agxHeroBg from "../img/heroBG.jpg";
import blockchainBG from "../img/blockchain-bg.jpg";
import agxLeftImage from "../img/agx-coin-left-image.png";
import auxRightImage from "../img/aux-coin-right-image.jpg";
import honestRightImage from "../img/honestRightImage.jpg";
import worldLeftImage from "../img/worldLeftImage.png";
import globalRightImage from "../img/globalRightImage.jpg";
import downloadAppStore from "../img/download-app-store.png";
import downloadGooglePlay from "../img/download-google-play.png";
import affiliateBg from "../img/affiliate-bg-image.jpg";

/* Breakpoints */
const breakpoints = [576, 768, 1320, 1720];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const PageAGX = ({ state }) => {
  const { t, i18n } = useTranslation();
  return (
    <AGXAUXContiner>
      <HeroContainer>
        <Title>
          <b>AGX & AUX</b>
          <br />
          Money Made Honest.
        </Title>
        <p>
          Backed by pure Silver & Gold. <br />
          Powered by blockchain.
        </p>
        <B>
          Take control of your finances with smart, secure, and stable money.
        </B>
        <PrimaryButton>Join Today</PrimaryButton>
      </HeroContainer>
      <BlockchainContainer>
        <Title>
          A <b>Blockchain-Powered</b> Monetary System.
        </Title>
        <Disclaimer>
          Reintroducing a safe-haven gold & silver as money again.{" "}
          <b>For everyone.</b>
        </Disclaimer>
        <Row>
          <div>
            <BlockchainTile>
              <b>Stable</b>
              <br />
              Inflation-resistant AGX & AUX Coins are backed by a reserve of
              securely vaulted gold and silver bullion.
            </BlockchainTile>
            <BlockchainTile>
              <b>Instant</b>
              <br />
              Within seconds, send & receive money globally at lower fees than
              traditional banks.
            </BlockchainTile>
            <BlockchainTile>
              <b>Secure</b>
              <br />
              The LODEPay System is built on secure blockchain protocols meant
              to preserve your wealth.
            </BlockchainTile>
          </div>
          <B>
            Digital Assets Restoring Real Value to <b>Your Wealth.</b>
          </B>
        </Row>
      </BlockchainContainer>
      <AGXContainer>
        <Row>
          <LeftImage src={agxLeftImage} />
          <div>
            <Title>
              The <b>AGX</b> Coin.
            </Title>
            <P>
              Each AGX Coin represents a one (1) gram weight of vaulted,
              audited, insured, and verifiable silver bullion.
            </P>
            <BlueButton>Get AGX Now</BlueButton>
          </div>
        </Row>
      </AGXContainer>
      <AUXContainer>
        <Row>
          <TextContainer>
            <Title>
              The <b>AUX</b> Coin.
            </Title>
            <P>
              Each AUX Coin represents a one (1) milligram weight of vaulted,
              audited, insured, and verifiable gold bullion.
            </P>
            <BlueButton>Get AUX Now</BlueButton>
          </TextContainer>
        </Row>
        <RightImage src={auxRightImage} />
      </AUXContainer>
      <LODEPayContainer>
        <Title>
          Switch to <b>LODEPay</b> in 4 Simple Steps.
        </Title>
        <Row>
          <Card>
            <CardNumber>1</CardNumber>
            <CardHeader>Download the LODEPay Wallet</CardHeader>
            <CardDesc>
              Available for free on desktop, iOS, & Android. No personal
              information or registration required.
            </CardDesc>
            <PrimaryButton>Learn More</PrimaryButton>
          </Card>
          <Card>
            <CardNumber>2</CardNumber>
            <CardHeader>Set up Your LODE Account</CardHeader>
            <CardDesc>
              Get your account verified in minutes to start using honest money.
            </CardDesc>
          </Card>
          <Card>
            <CardNumber>3</CardNumber>
            <CardHeader>Get Honest Money</CardHeader>
            <CardDesc>
              Buy your AGX & AUX with any debit or credit card. Then send, spend
              & store them on the LODEPay Wallet.
            </CardDesc>
          </Card>
          <Card>
            <CardNumber>4</CardNumber>
            <CardHeader>Spread Honesty and get paid! </CardHeader>
            <CardDesc>
              Share your affiliate link & start earning a passive income for
              every person you introduce to LODEPay.
            </CardDesc>
            <PrimaryButton>Learn More</PrimaryButton>
          </Card>
        </Row>
        <BlueButton>Switch Today!</BlueButton>
      </LODEPayContainer>
      <HonestContainer>
        <TextContainer>
          <Title>
            The Future of
            <br /> Commerce is <b>Honest.</b>
          </Title>
          <P>LODEPay helps businesses grow with Honest Money.</P>
          <BoldList>
            <li>Low cost, secure transactions</li>
            <li>Instant settlements</li>
            <li>A global marketplace of eager honest-money shoppers!</li>
          </BoldList>
          <P>
            <b>Don't break even, Break free.</b>
          </P>
          <BlueButton>LODEPay Business</BlueButton>
        </TextContainer>
        <RightImage src={honestRightImage} />
      </HonestContainer>
      <WorldContainer>
        <Row>
          <LeftImage src={worldLeftImage} />
          <div>
            <Title>
              One Wallet Bridging <br />a <b>World</b> of Opportunities.
            </Title>
            <P>
              Each AGX Coin represents a one (1) gram weight of vaulted,
              audited, insured, and verifiable silver bullion.
            </P>
            <P>
              <b>Simple.</b> Send & spend straight from your phone as fast as
              sending an SMS. <b>Secure.</b> Safe, low-cost transactions
              protected on blockchain. <b>Stable.</b> Real assets, real value,
              real money.
            </P>
            <Grey>Get Your LODEPay Wallet Today!</Grey>
            <Row>
              <DownloadButton src={downloadAppStore} />
              <DownloadButton src={downloadGooglePlay} />
            </Row>
          </div>
        </Row>
      </WorldContainer>
      <GlobalContainer>
        <TextContainer>
          <Title>
            Honest Money for a <b>Global Community.</b>
          </Title>
          <P>
            <b>Welcome to the LODEPay Community.</b> <br />
            A group of like-minded individuals driven by the belief <br />
            that everyone deserves to experience{" "}
            <b>
              financial <br />
              freedom & stable wealth.
            </b>
          </P>
          <BlueButton>Join Today!</BlueButton>
        </TextContainer>
        <RightImage src={globalRightImage} />
      </GlobalContainer>
      <AffiliateContainer>
        <Row>
          <Title>
            Expand the Chain, <br />
            Become an Affiliate Today.
          </Title>
          <P>
            Become a LODEPay Affiliate and empower your network with honest
            money. <br />
            <b>Earn a passive income. Honestly. </b>
          </P>
          <TransparentButton>Learn More</TransparentButton>
        </Row>
      </AffiliateContainer>
    </AGXAUXContiner>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(PageAGX);

/* Global */

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

const P = styled.p`
  font-size: 20px;
  line-height: 30px;
`;

const Row = styled.div`
  display: flex;

  ${mq[2]} {
    flex-direction: column;
  }
`;

const RightImage = styled.img``;

/* Hero */

const Title = styled.div`
  font-size: 50px;
  max-width: 750px;
  margin-top: 200px;
  font-weight: 300;
  text-align: left;
  ${mq[3]} {
    font-size: 50px;
  }
  ${mq[2]} {
    font-size: 40px;
  }
  ${mq[1]} {
    font-size: 40px;
  }
`;

const B = styled.b`
  display: block;
  font-size: 25px;
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

const BlueButton = styled.button`
  background: #36aaff;
  color: white;
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

const AGXAUXContiner = styled.div`
  color: #314452;
  font-family: "Rubik";
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-size: 25px;
  ${mq[0]} {
  }
`;

const HeroContainer = styled.div`
  padding-left: 300px;
  padding-right: 300px;
  background-image: url(${agxHeroBg});
  background-repeat: no-repeat;
  min-height: 1228px;
  ${Title} {
    margin-top: 375px;
    text-align: left;
    ${mq[2]} {
      margin-top: 200px;
    }
  }
  ${mq[3]} {
    background-position: -200px 0;
    padding-left: 150px;
    padding-right: 150px;
    ${Title} {
      font-size: 50px;
    }
  }
  ${mq[2]} {
    background-image: none;
    padding-left: 100px;
    padding-right: 100px;
    min-height: initial;
    ${PrimaryButton} {
      margin-bottom: 65px;
    }
  }
  ${mq[1]} {
    padding-left:70px;
    background-image: none;
    background: #f2f0f3;
  }
  & > p {
    margin-top: 40px;
    font-size: 25px;
    font-weight: 300;
  }
  ${B} {
    margin-top: 40px;
    max-width: 425px;
  }
  ${mq[0]} {
    padding-right: 7%;
    padding-left: 7%;
  }
`;

/* Blockchain Container */

const Disclaimer = styled.div``;



const LeftImage = styled.img`
  padding-left: 100px;
`;

const BlockchainTile = styled.div`
  max-width: 320px;
  text-align: left;
  font-size: 25px;
  padding: 30px 0;
  font-weight: 300;
  & > b {
    display: block;
    font-weight: 700;
  }
  border-bottom: 1px solid #707070;
`;

const BlockchainContainer = styled.div`
  background: url(${blockchainBG});
  background-repeat: no-repeat;
  background-position: -550px 260px;
  position: relative;
  padding-left: 300px;
  padding-right: 150px;
  padding-top: 100px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 1760px;
  ${Title} {
    margin-top: 175px;
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
    font-size: 20px;
    margin-top: 40px;
  }
  ${Row} {
    margin-top: 300px;
    width: 100%;
    justify-content: space-between;
    & > ${B} {
      align-self: center;
      font-size: 40px;
      max-width: 600px;
      text-align: left;
      font-weight: 300;
    }
  }
  ${PrimaryButton} {
    margin-top: 75px;
    margin-bottom: 400px;
  }
  ${mq[3]} {
    padding-left: 100px;
    padding-right: 100px;
    background-size: 1320px;
    background-position: -410px 250px;
    padding-bottom: 200px;
    padding-top: 0;
    min-height: 1200px;
    ${Title} {
      margin-top: 100px;
    }
    ${Row} {
      margin-top: 150px;
      ${B} {
        max-width: 400px;
      }
    }
    
  }
  ${mq[2]} {
    background-image: none;
    padding-left: 100px;
    padding-right: 100px;
    background-image: none;
    text-align: center;
    max-width: 100%;
    margin-right: 0;
    padding-bottom: 0px;
    background: white;
    ${Row} {
      align-items: center;
      margin-top: 80px;
    }
    ${Title} {
      width: 100%;
      max-width: 100%;
      text-align: center;
    }
    & > p {
      padding-left: 50px;
      padding-right: 50px;
      max-width: 100%;
    }
    ${RightImage} {
      display: none;
    }
    ${B} {
      margin-top: 80px;
      font-size: 40px;
      text-align: center;
    }
    ${Row} div ${BlockchainTile} {
      font-size: 20px;
    }
  }
  ${mq[1]} {
    padding-left: 70px;
  }
  ${mq[0]} {
    padding-right: 7%;
    padding-left: 7%;
  }
`;

/* AGX Container */

const AGXContainer = styled.div`
  padding-left: 1150px;
  padding-right: 300px;
  margin-top: 200px;
  margin-bottom: 200px;
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 0 330px 0 0;
  background: rgb(224, 224, 224);
  background: linear-gradient(
    180deg,
    rgba(224, 224, 224, 0.9) 0%,
    rgba(243, 243, 252, 0) 80%
  );
  ${P} {
    font-size: 25px;
    font-weight: 300;
    line-height: 35px;
  }
  ${LeftImage} {
    position: absolute;
    top: -430px;
    left: -480px;
  }
  ${mq[3]} {
    border-radius: 0px;
    padding-left: 800px;
    padding-right: 150px;
    ${Title} {
      margin-top: 80px;
    }
    ${LeftImage} {
      width: 60%;
      top: -200px;
      left: -200px;
    }
  }
  ${mq[2]} {
    padding-left:330px;
    margin-bottom:120px;
    ${LeftImage} {
      top: -160px;
      max-width: 510px;
    }
  }
  ${mq[1]} {
    padding-left:70px;
    padding-top: 220px;
    ${Title} {
      margin-top:0;
    }
    ${LeftImage}{
      width: 100%;
      left: -14%;
      top: -33%;
    }
  }
  ${mq[0]} {
    padding-right: 7%;
    padding-left: 7%;
    padding-top: 200px;
    ${LeftImage} {
      width: 90%;
    top: -29%;
    left: -19%;
    }
  }
`;

/* AUX Container */

const TextContainer = styled.div``;

const AUXContainer = styled.div`
  padding-left: 300px;
  position: relative;
  ${TextContainer} {
    max-width: 510px;
  }
  ${RightImage} {
    position: absolute;
    top: -100px;
    right: -300px;
    z-index: -1;
  }
  ${mq[3]} {
    padding-left: 150px;
    ${RightImage} {
      width: 50%;
      height: auto;
      right: -100px;
      top: 0px;
    }
    ${Title} {
      margin-top: 100px;
    }
  }
  ${mq[2]} {
    padding-left: 100px;
    ${TextContainer} {
      max-width:50%;
    }
    ${RightImage} {
      right: -50px;
    top: 60px;
    width: 55%;
    }
  }
  ${mq[1]} {
    display:flex;
    flex-direction:column;
    padding-left:0;
    ${Row} {
      order:1;
      padding-left:100px;
      ${TextContainer} {
        max-width: 80%;
      }
    }
    ${RightImage} {
      position: relative;
      order: 0;
      width: 90%;
      right: 0;
      top: 60px;
    }
  }
  ${mq[0]} {
    ${Row} {
      padding-left: 7%;
      padding-right: 7%;
      ${TextContainer} {
        width:100%;
        max-width:100%;
      }
    }
  }
`;

/* LODEPay Container */

const CardNumber = styled.div`
  font-size: 50px;
  font-weight: 700;
  border-radius: 80px;
  box-shadow: 0px 13px 20px #48484860;
  align-self: center;
  justify-self: flex-start;
  width: 60px;
  padding: 10px;
  margin-bottom: 30px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
  align-self: flex-start;
  padding: 35px;
  background: white;
  color: #5b5d7e;
  max-width: 256px;
  width: 256px;
  margin-left: 30px;
  margin-right: 30px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0px 25px 30px #48484840;
`;

const CardHeader = styled.div`
  font-size: 26px;
  border-bottom: 1px solid #003d6a40;
  padding-bottom: 30px;
  color: black;
`;

const CardDesc = styled.div`
  margin-top: 30px;
  font-size: 23px;
  line-height: 30px;
  font-weight: 300;
  opacity: 0.7;
`;

const LODEPayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 300px;
  background: linear-gradient(
    360deg,
    rgba(224, 224, 224, 0.8) 0%,
    rgba(243, 243, 252, 0) 100%
  );
  border-radius: 0 0 0 330px;
  ${Title} {
    max-width: 600px;
    margin-bottom: 150px;
  }
  ${BlueButton} {
    margin-bottom: 225px;
  }
  ${mq[3]} {
    margin-top: 150px;
    ${Row} {
      flex-wrap: wrap;
      justify-content: center;
    }
    ${Card} {
      margin-bottom: 50px;
    }
    ${BlueButton} {
      margin-top: 80px;
      margin-bottom: 150px;
    }
  }
  ${mq[1]} {
    padding-left: 70px;
    padding-right: 70px;
    margin-top: 0;
    border-radius: 0 0 0 130px;
  }
  ${mq[0]} {
    padding-left: 7%;
    padding-right: 7%;
  }
`;

/* Honest Container */

const BoldList = styled.ul``;

const HonestContainer = styled.div`
  padding-left: 315px;
  margin-top: 135px;
  position: relative;
  font-size: 20px;
  ${RightImage} {
    position: absolute;
    z-index: -1;
    right: -100px;
    top: 0;
  }
  ${P} {
    & > b {
      color: #a5a5a5;
      font-weight: 700;
    }
  }
  ${TextContainer} {
    max-width: 530px;
  }
  ${Title} {
    text-align: left;
    margin-bottom: 40px;
  }
  ${BoldList} {
    margin-top: 40px;
    margin-bottom: 40px;
    font-weight: 700;
    & > li {
      padding-left: 30px;
    }
  }
  ${BlueButton} {
    max-width: 300px;
  }
  ${mq[3]} {
    padding-left: 150px;
    margin-top: 75px;
    ${RightImage} {
      width: 60%;
      right: -50px;
      top: 120px;
    }
  }
  ${mq[2]} {
    padding-left: 100px;
    & > ${TextContainer} {
      max-width: 50vw;
    }
    ${RightImage} {
      width: 65%;
      right: -70px;
      top: 220px;
    }
  }
  ${mq[1]} {
    display: flex;
    flex-direction: column;
    margin-top:0;
    ${TextContainer} {
      order:1;
      padding-right: 70px;
      max-width:100%;
    }
    ${RightImage} {
      position: relative;
      order: 0;
      width: 105%;
      right: 3%;
    }
  }
  ${mq[0]} {
    padding-left: 7%;
    padding-right: 7%;
    ${RightImage} {
      right: -7%;
    }
  }
`;

/* World Container */

const Grey = styled.p`
  color: grey;
  margin-bottom: 30px;
`;

const WorldContainer = styled.div`
  position: relative;
  padding-left: 1100px;
  padding-right: 200px;
  font-size: 20px;
  font-weight: 300;
  margin-top: 250px;
  min-height: 850px;

  ${LeftImage} {
    position: absolute;
    left: -750px;
    top: -280px;
  }

  ${Title} {
    margin-bottom: 40px;
  }
  ${P} {
    margin-bottom: 40px;
  }
  ${mq[3]} {
    padding-left: 700px;
    padding-right: 150px;
    ${Title} {
      & > br {
        display:none;
      }
    }
    ${LeftImage} {
      width: 70%;
    left: -27%;
    }
  }
  ${mq[2]} {
    padding-left: 40%;
    margin-top: 80px;
    padding-right: 100px;
    ${LeftImage} {
      width: 60%;
      left: -37%;
      top: 60px;
    }
  }
  ${mq[1]} {
    padding-right: 100px;
  }
  ${mq[0]} {
    padding-left: 7%;
    padding-right: 7%;
    ${LeftImage} {
      position: relative;
    width: 120%;
    left: -66%;
    top: 0;
    }
    ${Title} {
      margin-top: 0;
    }
  }
`;

/* Global Container */

const GlobalContainer = styled.div`
  padding-left: 300px;
  position: relative;
  margin-top: 80px;
  min-height: 1000px;
  ${Title} {
    margin-bottom: 40px;
  }
  ${P} {
    font-size: 20px;
    line-height: 30px;
  }
  ${TextContainer} {
    max-width: 550px;
  }
  ${RightImage} {
    position: absolute;
    top: 0;
    right: -220px;
    z-index: -1;
  }
  ${mq[3]} {
    padding-left:150px;
    min-height: 700px;
    ${RightImage} {
      width: 60%;
    right: -100px;
    bottom: 0;
    top: initial;
    }
  }
  ${mq[2]} {
    padding-left:100px;
    ${TextContainer} {
      & > ${Title} {
        margin-top: 80px;
      }
      & > ${P} {
        max-width: 50vw;
      }
    }
  }
  ${mq[0]} {
    padding-left: 7%;
    padding-right: 7%;
    ${RightImage} {
      position: relative;
      width: 100%;
      right: 0;
      top: 20px;
    }
  }
`;

/* Affiliate Container */

const AffiliateContainer = styled.div`
  background: url(${affiliateBg});
  min-height: 1100px;
  text-align: center;
  color: white;
  background-position: -171px 0;
  background-repeat: no-repeat;

  ${Row} {
    flex-direction: column;
    align-items: center;
  }
  ${Title} {
    text-align: center;
  }
  ${TransparentButton} {
    border: 1px solid white;
    color: white;
  }
  ${mq[2]} {
    padding-left: 100px;
    padding-right: 100px;
    background-position: center;
    background-size: cover;
    min-height: 900px;
    & > ${Row} {
      & > ${Title} {
        margin-top: 100px;
      }
    }
  }
`;
