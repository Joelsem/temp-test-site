import React from "react";
import { connect, styled } from "frontity";
import { useTranslation } from 'react-i18next';
import './i18n';

/* Images */
import lCommunityImg from "../img/lcommunity.png"
import lCommunityLogo from "../img/lcommunitylogo.png"

/* Breakpoints */
const breakpoints = [576, 768, 1320, 1720];
const mq = breakpoints.map(
  bp => `@media (max-width: ${bp}px)`
)

const LCommunity = ({ state }) => {
  const { t, i18n } = useTranslation();
  return ( 
    <LCommunityContainer>
      <LeftImage src={lCommunityImg} />
      <Container>
        <SectionLogo src={lCommunityLogo} />
        <Title>Honest money designed <b>by you, for you.</b></Title>
        <P>
          LODE is the only community-driven system that allows everyone to transact with gold and silver digitally. 
          <b> Active worldwide in over 60 countries with over 6000 members</b>
        </P>
        <MarginTop>
            <PrimaryButton>{t("home.lpaycomu.join")}</PrimaryButton>
        </MarginTop>
      </Container>
      
    </LCommunityContainer>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(LCommunity);

const SectionLogo = styled.img`
`;

const LeftImage = styled.img`
`;

const P = styled.p`
    font-size: 20px;
    line-height: 35px;
`;

const PrimaryButton = styled.button`
  
`;

const MarginTop = styled.div`
    margin-top: 30px;
`;

const Title = styled.div`
`;

const Container = styled.div`
  width: 848px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 24px;
  color: #314452;
  display: flex;
  flex-direction: column;
`;

const LCommunityContainer = styled.div`
    display:flex;
    padding-left: 240px;
    margin-top: 100px;
    overflow: hidden;
    margin-top: 250px;
    ${mq[3]} {
      padding-left: 100px;
    }
    ${mq[2]} {
      flex-direction: column;
      margin-top: 100px;
    }
    ${mq[1]} {
      padding-left: 50px;
    }
    ${mq[0]} {
    }
  ${LeftImage} {
    width: auto;
    object-fit: contain;
    align-self: center;
    margin-right: 100px;
    ${mq[3]} {
      width: 600px;
    }
    ${mq[0]} {
      width: 500px;
      position: relative;
      left: 30px;
    }
    
  ${mq[2]} {
    order: 1;
  }
  }
  ${SectionLogo}{
    max-width: 301px;
    position: relative;
    margin-bottom: 20px;
  }
  ${Container} {
    width: 550px;
    padding-top: 125px;
    ${mq[2]} {
      order: 0;
    }
    ${mq[1]} {
      padding-left: 0;
      padding-top: 50px;
    }
  }
  ${PrimaryButton} {
  }
  ${SectionLogo} {
    max-width: 301px;
  }
  ${Title} {
    font-size: 45px;
    margin-bottom: 20px;
    ${mq[1]} {
      font-size: 40px;
    }
  }
  ${PrimaryButton} {
    background: #36AAFF;
    color: white;
    border: none;
    border-radius: 30px;
    font-family: 'Rubik';
    padding: 18px 44px;
    font-weight: 500;
    font-size: 16px;
    box-shadow: 0px 20px 20px #48484860;
    cursor: pointer;
  }
  ${P} {
    max-width: 500px;
  }

`;



