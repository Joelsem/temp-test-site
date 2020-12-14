import React from "react";
import { connect, styled } from "frontity";
import { useTranslation } from 'react-i18next';
import './i18n';

/* Images */
import lMarketsLogo from "../img/l-markets-logo.png"
import lMarketsImg from "../img/l-markets-img.png"

/* Breakpoints */
const breakpoints = [576, 768, 1320, 1720];
const mq = breakpoints.map(
  bp => `@media (max-width: ${bp}px)`
)

const LMarkets = ({ state }) => {
  const { t, i18n } = useTranslation();
  return ( 
    <LMarketsContainer>
      <Container>
        <SectionLogo src={lMarketsLogo} />
        <Title>The <b>future</b> of your business starts here.</Title>
        <P>
          <ul>
            <li>{t("home.lmarkets.1")}</li>
            <li>{t("home.lmarkets.2")}</li>
            <li>{t("home.lmarkets.3")}</li>
          </ul>
          {t("home.lmarkets.4")}
        </P>

        <MarginTop>
            <PrimaryButton>{t("home.lmarkets.explore")}</PrimaryButton>
        </MarginTop>

      </Container>
      <RightImage src={lMarketsImg} />
    </LMarketsContainer>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(LMarkets);

const RightImage = styled.img`
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

const LMarketsContainer = styled.div`
    display:flex;
    padding-left: 375px;
    padding-right: 200px;
    padding-top: 500px;
    padding-bottom: 500px;
    justify-content: space-between;
    overflow: hidden;
    margin-top: 250px;
    position: relative;
    ${mq[3]} {
      padding-left: 100px;
      padding-top: 200px;
    }
    ${mq[2]} {
      padding-left: 10px;
      display: block;
      padding-top: 100px;
      margin-top: 100px;
    }
    ${mq[1]} {
      padding-right: 0;
      padding-bottom: 100px;
    }
  ${RightImage} {
    position: absolute;
    right: -20px;
    top: 0px;
    z-index: -1;
    ${mq[3]} {
      width: 800px;
    }
    ${mq[2]} {
      width: initial;
      position: relative;
      right: 0;
      width: 768px;
    }
    ${mq[1]} {
      width: 567px;
      left: -20px;
    }
  }
  ${Container} {
    width: 500px;
    ${mq[2]} {
      padding-left: 100px;
      width: 600px;
      margin-left: auto;
      margin-right: auto;
    }
    ${mq[1]} {
      padding-left: 50px;
    }
    ${mq[0]} {
      padding-right: 50px;
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
    font-size: 50px;
    ${mq[1]} {
      font-size: 40px;
    }
  }
  ${SectionLogo} {
    max-width: 238px;
  }

`;



