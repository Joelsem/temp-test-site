import React from "react";
import { connect, styled } from "frontity";
import { useTranslation } from 'react-i18next';
import './i18n';
import DownloadButtons from "./download-buttons";
import {useMediaQuery, useMediaQueries} from '@react-hook/media-query';

/* Images */
import lodepayCardImg from "../img/lodepay-vc-img.png";
import lodepayMobileCard from "../img/l-pay-card-mobile.jpg";


/* Breakpoints */
const breakpoints = [576, 768, 1320, 1720];
const mq = breakpoints.map(
  bp => `@media (max-width: ${bp}px)`
)

const LodepayCards = ({ state }) => {
  const { t, i18n } = useTranslation();
  const mobileVw = useMediaQuery('only screen and (max-width: 768px)')
  if(mobileVw) { 
  return ( 
    <LodepayCardsContainer>
      <Container>
        <Title><b>LODEpay</b> Virtual cards.</Title>
        
        <P>
          Spend AGX & AUX at Amazon, Apple, Nike and more! 
           <b> Get more out of your money. Settle with metal.</b>
        </P>

        <MarginTop>
            <PrimaryButton>{t("home.lpaycard.learn")}</PrimaryButton>
        </MarginTop>

        <DownloadButtons />

      </Container>
      <RightImage src={lodepayMobileCard} />
    </LodepayCardsContainer>
    
  
  ); } else { 
    return (
    <LodepayCardsContainer>
      <Container>
        <Title><b>LODEpay</b> Virtual cards.</Title>
        
        <P>
          Spend AGX & AUX at Amazon, Apple, Nike and more! 
           <b> Get more out of your money. Settle with metal.</b>
        </P>

        <MarginTop>
            <PrimaryButton>{t("home.lpaycard.learn")}</PrimaryButton>
        </MarginTop>

        <DownloadButtons />

      </Container>
      <RightImage src={lodepayCardImg} />
    </LodepayCardsContainer>
  )}
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(LodepayCards);

const RightImage = styled.img`
`;

const P = styled.p`
    max-width: 540px;
    font-size: 20px;
    line-height: 35px;
`;

const PrimaryButton = styled.button`
`;

const MarginTop = styled.div`
    margin-top: 30px;
`;

const Container = styled.div`
  width: 848px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 24px;
  color: #314452;
  display: flex;
  flex-direction: column;
  ${mq[0]} {
    order: 1;
  }
`;

const Title = styled.div`
    font-size: 60px;
    max-width: 600px;
    margin-top: 200px;
`;

const LodepayCardsContainer = styled.div`
    display:flex;
    padding-left: 375px;
    padding-right: 200px;
    margin-top: 200px;
    justify-content: space-between;
    overflow: hidden;
    ${mq[3]} {
      padding-left: 100px;
    }
    ${mq[1]} {
      padding-left: 50px;
      margin-top: 100px;
    }
    ${mq[0]} {
      flex-direction: column;
      padding-left: 50px;
      padding-right: 50px;
    }
  ${RightImage} {
    width: auto;
    object-fit: contain;
    height: 703px;
    align-self: center;
    ${mq[0]} {
      order: 0;
      width: 100%;
      height: auto;
    }
  }
  ${Container} {
    width: 450px;
    ${mq[1]} {
      padding-left: 0;
    }
  }
  ${PrimaryButton} {
    color: #36AAFF;
    background: white;
    border: none;
    border-radius: 30px;
    padding: 20px 40px;
    max-width: 230px;
    font-weight: 500;
    font-size: 16px;
    box-shadow: 0px 13px 20px #48484860;
    cursor: pointer;
    text-align: center;
    font-family: 'Rubik';
  }
  ${Title} {
    margin-top: 50px;
    ${mq[1]} {
      font-size: 40px;
    }
  }

`;



