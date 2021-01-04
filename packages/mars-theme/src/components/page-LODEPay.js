import React, { useState, useRef } from "react";
import { connect, styled } from "frontity";
import { useTranslation } from "react-i18next";
import { useMediaQuery, useMediaQueries } from "@react-hook/media-query";
import Accordion from "./component-accordion";
import "./i18n";

/* Images */
import lpHeroBg from "../img/lodepay-hero-background.jpg";
import lpCommunityLargeImg from "../img/lodepay-community-large-image.jpg";
import lpDecentralizedImg from "../img/lodepay-decentralized-image.jpg";
import lpDnaImg from "../img/lodepay-dna-image.png";
import lpEthosLargeCircleBg from "../img/lodepay-ethos-large-circle.png";
import lpEthosImg from "../img/lodepay-ethos-img.jpg";
import lpHelpImg from "../img/lodepay-help-image.jpg";
import lpStoryImg from "../img/lodepay-story-image.jpg";
import lpStructureLargeImg from "../img/lodepay-structure-large-image.png";

/* Breakpoints */
const breakpoints = [576, 768, 1320, 1720];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const PageLODEPay = ({ state }) => {
  const { t, i18n } = useTranslation();
  return (
    <LODEPayPageContainer>
      <HeroContainer>
        <Title>
          What is
          <b>LODEpay?</b>
        </Title>
        <p>
          A global monetary ecosystem that returns gold and silver as secure,
          borderless and stable money again.
          <b>Digitally.</b>
        </p>
        <B>Watch the Video PLAY BUTTON HERE</B>
      </HeroContainer>
      <OurStoryContainer>
        <Row>
          <LeftImage src={lpStoryImg} />
          <div>
            <Title>
              Welcome to
              <b>LODEpay.</b>
            </Title>
            <p>
              An initiative that all started when a group of industry experts
              got together, determined to spark change. Frustrated with the
              contemporary monetary system’s inability to address the needs of
              the unbanked, inflation-oppressed people.
            </p>
            <p>
              Working together to tear down exclusionary barriers and instead
              offer a frictionless path to wealth preservation in its purest
              form, by placing tried-and-true silver and gold at the center of
              an entirely new monetary ecosystem.
            </p>
            <p>
              An initiative set to dismantle the hurdles that exist within our
              financial system and foster a more stable and inclusive one.
            </p>
            <p>
              <b>
                Levelling the playing field and levelling up those who need it
                most.
              </b>
            </p>
          </div>
        </Row>
      </OurStoryContainer>
      <EthosContainer>
        <Title>
          Levelling the playing field and levelling up those who need it most.
        </Title>

        <Row>
          <Card>
            <CardHeader>Our Mission</CardHeader>
            <CardDesc>
              To build an autonomous, stable and inclusive monetary system using
              Distributed Ledger Technology (DLT) so everyone can send, spend
              and store digital gold and silver instantly, securely, and
              globally.
            </CardDesc>
          </Card>
          <Card>
            <CardHeader>Our Vision</CardHeader>
            <CardDesc>
              An honest and more inclusive global financial system where
              instant, low-cost and borderless stable money is the norm.
            </CardDesc>
          </Card>
          <CardBlank>
            <CardHeader>Our Ethos</CardHeader>
            <RightImage src={lpEthosImg} />
          </CardBlank>
        </Row>
        <PrimaryButton>Join The Community Today!</PrimaryButton>
        <LargeImage src={lpEthosLargeCircleBg} />
      </EthosContainer>
      <CommunityContainer>
        <Row>
          <LeftImage src={lpCommunityLargeImg} />
          <div>
            <Title>
              Meet the <b>LODEpay</b>
              Community.
            </Title>
            <P>
              A global collective made up of like-minded individuals, advocating
              for a return to sound, honest money.{" "}
              <b>
                Founded on the belief that everyone deserves financial freedom.{" "}
              </b>
            </P>
            <P>
              Working together to eliminate barriers for the unbanked and
              promoting a more honest financial future.
            </P>
            <Row>
              <PrimaryButton>Switch Today!</PrimaryButton>
              <Col>
                <PrimaryButton>TELEGRAM LOGO</PrimaryButton>
                <div>Join the conversation on Telegram</div>
              </Col>
            </Row>
          </div>
        </Row>
      </CommunityContainer>
      <StructureContainer>
        <Title>The LODEpay Structure Explained.</Title>
        <p>LODEPay is made up of seven entities working together to…</p>
        <Row>
          <div>
            <BoldGrey>TOKEN OPERATIONS</BoldGrey>
            <Grey>COMMUNITY</Grey>
          </div>
          <div>
            <BoldGrey>LODE</BoldGrey>
            <Grey>BOD / COMMUNITY / SPAC</Grey>
          </div>
          <div>
            <BoldGrey>EQUITY</BoldGrey>
            <Grey>INVESTOR / OPERATIONS</Grey>
          </div>
        </Row>
        <LeftImage src={lpStructureLargeImg} />
        <PrimaryButton>Learn more</PrimaryButton>
      </StructureContainer>
      <DecentralizedContainer>
        <div>
          <Title>
            We are a Decentralized,
            <b>Global Team.</b>
          </Title>
          <P>
            LODEPay’s Service Providers Alliance is made up of the brightest
            minds in their respective fields, working together towards a common
            goal: financial freedom for all.
          </P>
          <P>
            A group of specialized consultants, engineers, creatives, and
            innovators aimed at building an honest monetary system. By the
            people, for the people.
          </P>
          <PrimaryButton>Take Part in LODEpay</PrimaryButton>
        </div>
        <RightImage src={lpDecentralizedImg} />
      </DecentralizedContainer>
      <DNAContainer>
        <Row>
          <LeftImage src={lpDnaImg} />
          <div>
            <Title>
              Giving back is part of <b>LODEpay’s</b> DNA.
            </Title>
            <P>
              If you’re a charitable organization working hard to build a better
              future, reach out to LODEPay. Our visions are aligned.
            </P>
            <P>
              <b>Let’s collaborate and spread the word!</b>
            </P>
            <PrimaryButton>LODEpay for Charity</PrimaryButton>
          </div>
        </Row>
      </DNAContainer>
      <HelpContainer>
        <div>
          <Title>Need more help?</Title>
          <P>Review our FAQs to get answers quickly.</P>
          <P>
            <b>Prefer to talk?</b> <br />
            Reach out to our support team, they’re more than happy to help!
          </P>
          <PrimaryButton>Contact Us</PrimaryButton>
        </div>
        <RightImage src={lpHelpImg} />
      </HelpContainer>
    </LODEPayPageContainer>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(PageLODEPay);

/* Global */

const P = styled.p``;

const Row = styled.div`
  display: flex;

  ${mq[2]} {
    flex-direction: column;
  }
`;

const LargeImage = styled.img``;

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

const LODEPayPageContainer = styled.div`
  color: #314452;
  font-family: "Rubik";
  display: flex;
  flex-direction: column;
  overflow: hidden;
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
  background-image: url(${lpHeroBg});
  background-repeat: no-repeat;
  ${mq[3]} {
    background-position: -100px 0;
  }
  ${mq[2]} {
    background-position: -280px 0;
    padding-left: 100px;
    padding-right: 100px;
    ${TransparentButton} {
      margin-bottom: 100px;
    }
  }
  ${mq[1]} {
    background-image: none;
    background: #f2f0f3;
  }
`;

/* Blockchain Container */

const Disclaimer = styled.div``;

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

const LeftImage = styled.img`
  padding-left: 100px;
`;

const BlockchainTile = styled.div``;

const OurStoryContainer = styled.div`
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
`;

/* AGX Container */

const RightImage = styled.img``;

const EthosContainer = styled.div`
  margin-top: 200px;
  margin-bottom: 200px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

/* AUX Container */

const AUXContainer = styled.div``;

/* LODEPay Container */

const CardNumber = styled.div``;

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

const CommunityContainer = styled.div``;

/* Honest Container */

const BoldList = styled.ul``;

const StructureContainer = styled.div``;

/* World Container */

const Grey = styled.p`
  color: grey;
`;

const DNAContainer = styled.div``;

/* Global Container */

const HelpContainer = styled.div``;
