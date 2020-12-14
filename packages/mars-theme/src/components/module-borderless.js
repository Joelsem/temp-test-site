import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";
import { useTranslation } from 'react-i18next';
import {useMediaQuery, useMediaQueries} from '@react-hook/media-query';
import './i18n';

/* Images */
import borderlessImage from "../img/borderless-image.jpg"

/* Breakpoints */
const breakpoints = [576, 768, 1320, 1720];
const mq = breakpoints.map(
  bp => `@media (max-width: ${bp}px)`
)

const Borderless = ({ state }) => {
  const { t, i18n } = useTranslation();
  return ( 
    <BorderlessContainer>
      <Container>
        <Title><b>Borderless</b> digital assets made for you.</Title>
        
        <P>
            LODE is constructing the most trusted and secure
            blockchain-powered <b>gold</b> and <b>silver</b> money system. <br />
            <b>Created by the people, for the people.</b>
        </P>

        <MarginTop>
            <PrimaryButton>{t("home.foru.switch")}</PrimaryButton>
        </MarginTop>

      </Container>
      <RightImage src={borderlessImage} />
    </BorderlessContainer>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Borderless);

const RightImage = styled.img`
position: relative;
left: 40px;
max-height: 836px;
  ${mq[3]} {
    max-height: 770px;
  }
`;

const P = styled.p`
    max-width: 540px;
    font-size: 20px;
    line-height: 35px;
`;

const PrimaryButton = styled.button`
    background: #36AAFF;
    color: white;
    border: none;
    border-radius: 30px;
    padding: 18px 44px;
    max-width: 240px; 
    font-weight: 500;
    font-size: 20px;
    box-shadow: 0px 20px 20px #48484860;
    cursor: pointer;
`;

const MarginTop = styled.div`
    margin-top: 30px;
`;



const BorderlessContainer = styled.div`
    display:flex;
    padding-left: 375px;
    margin-top: 100px;
    overflow: hidden;
    ${mq[3]} {
      padding-left: 100px;
    }
    ${mq[2]} {
      padding-left: 10vw;
      display:block;
    }
    ${mq[1]} {
      padding-left: 50px;
    }
    ${mq[0]} {
      padding-bottom: 50px;
      padding-right: 40px;
    }
    ${RightImage} {
      ${mq[2]} {
        max-height: initial;
        left: 0;
        width: calc(100vw - 200px);
        padding: 50px;
        max-width: 100vw;
      }
      ${mq[0]} {
        display: none;
      }
    }
`;

const Title = styled.div`
    font-size: 60px;
    max-width: 600px;
    margin-top: 200px;
    ${mq[1]} {
      font-size: 40px;
    }
`;

const Container = styled.div`
  width: 848px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 24px;
  color: #314452;
  display: flex;
  flex-direction: column;
  ${mq[2]} {
    padding: 0px;
  }
  ${Title} {
    ${mq[2]} {
      margin-top: 50px;
    }
  }
`;
