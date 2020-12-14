import React from "react";
import { connect, styled } from "frontity";
import { useTranslation } from 'react-i18next';
import './i18n';

/* Images */
import lMediaBg from "../img/l-media-bg.jpg"
import lMediaLogo from "../img/l-media-logo.png"
import lMediaMobileImg from "../img/lode-media-circle.jpg"

/* Breakpoints */
const breakpoints = [576, 768, 1320, 1720];
const mq = breakpoints.map(
  bp => `@media (max-width: ${bp}px)`
)

const LMedia = ({ state }) => {
  const { t, i18n } = useTranslation();
  return ( 
    <LMediaContainer>
      <MobileMediaImage src={lMediaMobileImg} />
      <Container>
        <SectionLogo src={lMediaLogo} />
        <Title><b>Join</b> the honest money conversation.</Title>
        <P>
          The global movement you want to be a part of. Stay informed with <b>LODEmedia.</b>
        </P>
        <MarginTop>
            <PrimaryButton>{t("home.lpaycard.learn")}</PrimaryButton>
        </MarginTop>
      </Container>
    </LMediaContainer>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(LMedia);

const RightImage = styled.img`
`;

const MobileMediaImage = styled.img`
`;

const SectionLogo = styled.img`
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
`;

const Title = styled.div`
    font-size: 60px;
    max-width: 600px;
    margin-top: 200px;
`;

const LMediaContainer = styled.div`
    background-image: url(${lMediaBg});
    background-position: right;
    display:flex;
    padding-left: 1000px;
    padding-right: 200px;
    justify-content: space-between;
    overflow: hidden;
    height: 1000px;
    color: white;
    ${mq[3]} {
      background-position: left;
      height: auto;
      padding-bottom: 100px;
    }
    ${mq[2]} {
      background-image: none;
      color: #314452;
      padding-left: 100px;
      display: block;
      padding-right: 100px;
    }
    ${mq[1]} {
      padding-left: 50px;
      padding-right: 50px;
    }
    ${Container} {
      color: white;
      width: 500px;
      justify-content: center;
      width: 450px;
      ${mq[3]} {
        background: rgba(0,0,0,0.5);
        max-width: 500px;
      }
      ${mq[2]} {
        color: #314452;
        background: none;
      }
      ${mq[1]} {
        padding-left: 0;
      }
      ${mq[0]} {
        width: initial;
      }
    }
    ${Title} {
      font-size: 40px;
      font-family: 'Rubik';
      margin-top: 50px;
    }
  ${RightImage} {
    width: auto;
    object-fit: contain;
    height: 703px;
    align-self: center;
  }
  ${PrimaryButton} {
    color: white;
    background: transparent;
    border: 2px solid white;
    border-radius: 30px;
    padding: 20px 40px;
    max-width: 230px;
    font-weight: 500;
    font-size: 16px;
    box-shadow: 0px 13px 20px #48484860;
    cursor: pointer;
    text-align: center;
    font-family: 'Rubik';
    ${mq[2]} {
      color: #314452;
    }
  }
  ${SectionLogo} {
    width: 187px;
  }
  ${P} {
    font-size: 18px;
  }
  ${MobileMediaImage} {
    display: none;
    ${mq[2]} {
      display: block;
      max-width: 100%;
      align-self: center;
    }
  }

`;



