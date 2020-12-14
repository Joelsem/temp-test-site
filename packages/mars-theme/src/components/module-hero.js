import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import DownloadButtons from "./download-buttons";
import MobileMenu from "./menu";
import { useTranslation } from 'react-i18next';
import {useMediaQuery, useMediaQueries} from '@react-hook/media-query';
import './i18n';

/* Images */
import lodeLogo from "../img/logo.svg"
import homeHeroBg from "../img/home-hero-bg.jpg"
import playSVG from "../img/play.svg"
import heroBgMobile from "../img/hero-background-mobile.jpg"
import heroAppMobile from "../img/hero-wallet-mobile.png"

/* Breakpoints */
const breakpoints = [576, 768, 1320, 1720];
const mq = breakpoints.map(
  bp => `@media (max-width: ${bp}px)`
)

const Header = ({ state }) => {
  const { t, i18n } = useTranslation();
  const mobileVw = useMediaQuery('only screen and (max-width: 1319px)')
  if(mobileVw) { 
    /* Mobile View */
    return( 
      <MobileHeroContainer>
        <TextMobileWrapper>
          <MobileMenu />
          <MenuContainer>
            <LodeLogo src={lodeLogo} className="logo" />
          </MenuContainer> 
        
        <Container>
          <Title>The <b>future</b> of money starts here</Title>
          <P>Welcome to the birthplace of the <b>Honest Money Revolution.</b> Fueled by a global monetary system that empowers you with:</P>
          <Pm>• {t("home.hero.sub1")}</Pm>
          <Pm>• {t("home.hero.sub2")}</Pm>
          <Pm>• {t("home.hero.sub3")}</Pm>
          <Row>
            <MarginTop>
            <PrimaryButton>{t("home.hero.start")}</PrimaryButton>
            <PlayButton><PlaySVG src={playSVG} /><PlayButtonLabel>{t("home.hero.videos")}</PlayButtonLabel><PlayButtonNotifications>3</PlayButtonNotifications></PlayButton>
            </MarginTop>
          </Row>
        </Container>
        </TextMobileWrapper>
        <DownloadMobileWrapper>
            <DownloadButtons />
          </DownloadMobileWrapper>
      </MobileHeroContainer>
    ) } else { 
      /* Desktop View */
      return( 
    <HeroContainer>
      <MenuContainer>
        <LodeLogo src={lodeLogo} className="logo" />
        <Nav /> 
      </MenuContainer> 
    <Container>
      <Title>The <b>future</b> of money starts here</Title>
      <P>Welcome to the birthplace of the <b>Honest Money Revolution.</b> Fueled by a global monetary system that empowers you with:</P>
      <Pm>• {t("home.hero.sub1")}</Pm>
      <Pm>• {t("home.hero.sub2")}</Pm>
      <Pm>• {t("home.hero.sub3")}</Pm>
      <Row>
        <MarginTop>
        <PrimaryButton>{t("home.hero.start")}</PrimaryButton>
        <PlayButton><PlaySVG src={playSVG} /><PlayButtonLabel>{t("home.hero.videos")}</PlayButtonLabel><PlayButtonNotifications>3</PlayButtonNotifications></PlayButton>
        </MarginTop>
      </Row>
      
      <DownloadButtons />

      
    </Container>
  </HeroContainer> ) };
  

};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const TextMobileWrapper = styled.div`
  padding-left: 100px;
  padding-right:100px;
  ${mq[1]} {
    padding-left: 50px;
    padding-right: 50px;
  }
`;

const P = styled.p`
  max-width: 590px;
  font-size: 20px;
  line-height: 35px;
`;

const Pm = styled.p`
max-width: 590px;
  font-size: 20px;
  line-height: 35px;
margin: 0px;
`;

const PrimaryButton = styled.button`

background: #36AAFF;
    color: white;
    border: none;
    border-radius: 30px;
    padding: 18px 44px;
    max-width: 200px;
    font-weight: 500;
    font-size: 20px;
    box-shadow: 0px 20px 20px #48484860;
    cursor: pointer;

`;

const PlayButton = styled.button`

border: none;
border-radius: 30px;
width: 60px;
height: 60px;
background: white;
box-shadow: 0px 20px 20px #48484860;
margin-left: 30px;
position: relative;
cursor: pointer;

`;

const PlayButtonNotifications = styled.div`
position:absolute;
height: 20px;
width: 20px;
background: #36AAFF;
top: 0;
left: 0;
border-radius: 30px;
display: flex;
justify-content: center;
align-items: center;
color: white;
font-size: 12px;
`;

const PlayButtonLabel = styled.div`
position: absolute;
bottom: -25px;
left: 5px;
font-family: 'Rubik';
    color: #777777;
    font-weight: 500;
    letter-spacing: 1px;
`;

const PlaySVG = styled.img`

position:relative;
left:2px;

`;

const Row = styled.div`

display: flex;


`;

const MarginTop = styled.div`

margin-top: 30px;

`;

const MobileHeroContainer = styled.div`
  background-image: url(${heroBgMobile});
  background-position: 280px 0px;
  background-repeat: no-repeat;
  font-family: 'Rubik', sans-serif;
  font-weight: 300;
  min-height: 1160px;
  ${Row} {
    flex-direction: row;
  }
  ${mq[1]} {
    background-position: 110px 100px;
    background-size: 800px auto;
  }
`;

const HeroContainer = styled.div`
  background-image:url(${homeHeroBg});
  padding-left: 375px;
  padding-right: 330px;
  background-position: 70% 100%;
  background-repeat: no-repeat;
  font-family: 'Rubik', sans-serif;
  font-weight: 300;
  min-height: 1160px;
  ${mq[3]} {
    padding-left: 100px;
  }
`;

const DownloadMobileWrapper = styled.div`
  height: 600px;
  min-height: 650px;
  margin-bottom: 300px;
  background-image: url(${heroAppMobile});
  background-size: 600px auto;
  background-repeat: no-repeat;
  background-position: -100px 0;
  margin-top: 100px;
  display:flex;
  justify-content: flex-start;
  padding-right: 100px;
  padding-left: 500px;
  align-items: center;
  align-content: center;
  ${Row} {
    flex-direction: row;
  }
  ${mq[2]} {
    margin-bottom: 50px;
  }
  ${mq[1]} {
    padding-left: 320px;
    background-size: 370px auto;
    background-position: -50px 0;
    height: 400px;
    max-height: 400px;
    min-height: initial;
    margin-top: 100px;
  }
  ${mq[0]} {
    padding-left: 20px;
    background-position: 100px;
  }
`;

const LodeLogo = styled.img`
  ${mq[2]} {
    max-width: 25vw;
  }
`;

const MediumText = styled.div`
  font-weight: 500;
  display: inline;
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 60px;
`;

const Menu = styled.div`

`;

const MenuButton = styled.button`

`;

const Container = styled.div`
  width: 848px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 24px;
  color: #314452;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  ${mq[2]} {
    padding: 0;
  }
`;

const Title = styled.div`
font-size: 70px;
max-width: 600px;
margin-top: 200px;
${mq[2]} {
  margin-top: 100px;
  font-size: 60px;
}
`;

const Description = styled.h4`
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
`;

