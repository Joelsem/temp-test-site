import React from "react";
import { connect, styled } from "frontity";
import DownloadButtons from "./download-buttons";
import { useTranslation } from 'react-i18next';
import './i18n';

/* Images */
import lodeToken from "../img/lode-token-img.png";
import agxCoin from "../img/agx-coin-img.png";
import auxCoin from "../img/aux-coin-img.png";
import trioBgImg from "../img/trio-background-circle.jpg";
import lPayPhoneImg from "../img/l-pay-phone-image.png";
import lPayImg from "../img/lpay-logo.png";

/* Breakpoints */
const breakpoints = [576, 768, 1320, 1720];
const mq = breakpoints.map(
  bp => `@media (max-width: ${bp}px)`
)

const TokenTrio = ({ state }) => {
  const { t, i18n } = useTranslation();
  return ( 
    <TrioContainer>
      <TrioRow>
        <Card>
          <CardImg src={lodeToken}/>
          <CardTitle>
            {t("home.3.lode")}
          </CardTitle>
          <CardDesc>
            {t("home.3.lode1")}
          </CardDesc>
          <TokenCardBtn>
            {t("home.3.lode2")}
          </TokenCardBtn>
        </Card>
        <Card>
          <CardImg src={agxCoin}/>
          <CardTitle>
            {t("home.3.agx")}
          </CardTitle>
          <CardDesc>
            {t("home.3.agx1")}
          </CardDesc>
          <TokenCardBtn>
            {t("home.3.agx2")}
          </TokenCardBtn>
        </Card>
        <Card>
          <CardImg src={auxCoin}/>
          <CardTitle>
            {t("home.3.aux")}
          </CardTitle>
          <CardDesc>
            {t("home.3.aux1")}
          </CardDesc>
          <TokenCardBtn>
            {t("home.3.aux2")}
          </TokenCardBtn>
        </Card>
      </TrioRow>
      <BgImg src={trioBgImg} />
      <TwoColContainer>
        <LeftImage src={lPayPhoneImg} />
        <Container>
          <WidthMax>
            <SectionMarginTop />
            <SectionLogo src={lPayImg} />
            <Title>
              <b>Reinventing</b> money as you know it.
            </Title>
            <P>
              Send, spend and store your AGX & AUX with the secure, user-friendly LODEpay Wallet. <b>One wallet unlocking all your honest money.</b>
            </P>
            <DownloadButtons />
          </WidthMax>
        </Container>
      </TwoColContainer>
    </TrioContainer>
  );
};

export default connect(TokenTrio);

const LeftImage = styled.img`
  position: relative;
  left: -150px;
  margin-right: -100px;
  bottom: -3px;
  ${mq[3]} {
    max-width: 800px;
  }
`;

const BgImg = styled.img`
  position: absolute;
  z-index: -1;
  top: -230px;
  left: -630px;
  ${mq[3]} {
    display:none;
  }
`;

const Card = styled.div`
  max-width: 375px;
  text-align: center;
  margin: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardImg = styled.img`
  ${mq[3]} {
    max-width: 300px;
  }
`;

const CardTitle = styled.div`
  font-size: 30px;
  font-weight: 500;
  color: #314452;
  margin-top: 10px;
`;

const CardDesc = styled.div`
  margin-top: 20px;
  font-size: 20px;
  color: #777777;
  max-width: 380px;
`;

const TokenCardBtn = styled.div`
  color: #314452;
  background: white;
  border: none;
  border-radius: 30px;
  padding: 18px 44px;
  max-width: 240px;
  font-weight: 500;
  font-size: 20px;
  box-shadow: 0px 13px 20px #48484860;
  margin-top: 45px;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  position: relative;
  overflow: hidden;
`;

const TwoColContainer = styled.div`
  display:flex;
  margin-top: 100px;
  overflow: hidden;

  ${mq[2]} {
    flex-direction: column;
  }


  ${LeftImage} {
    ${mq[2]} {
      left: 0;
      margin-right: 0;
      align-self: flex-start;
      flex-grow:0;
      align-self:flex-start;
      justify-self:flex-start;
      order:1;
    }
    ${mq[1]} {
      width: 500px;
    }
    ${mq[0]} {
      width: 100%;
    }
  }

  ${Container} {
    ${mq[2]} {
      order: 0;
      padding-left: 50px;
    }
    ${mq[0]} {
      padding-right: 20px;
    }
  }


`;

const TrioRow = styled.div`
  display:flex;
  margin: auto;
  margin-top: 140px;
  ${mq[2]} {
    flex-wrap: wrap;
    justify-content: center;
  }
  ${mq[1]} {
    margin-top: 60px;
  }
  ${BgImg} {
    display: none;
  }
`;

const TrioContainer = styled.div`
  position: relative;
  
    
  ${TwoColContainer} {
    ${mq[2]} {
      flex-direction: column;
    }
  }
  ${TrioRow} {
    padding-left: 250px;
    ${mq[3]} {
      padding-left: 100px;
    }
    ${mq[2]} {
      padding-left: 0px
    }
  }
`;

const SectionLogo = styled.img`
  max-width: 110px;
  position: relative;
  margin-bottom: 20px;
`;

const P = styled.p`
  max-width: 540px;
  font-size: 20px;
  line-height: 35px;
  color: #314452;
`;

const Title = styled.div`
  font-size: 50px;
  max-width: 600px;
  line-height: 60px;
  margin-bottom: 25px;
  color: #314452;
  ${mq[0]} {
    font-size: 40px;
  }
`;

const SectionMarginTop = styled.div`
  margin-top: 200px;
  ${mq[2]} {
    margin-top: 50px;
  }
`;

const WidthMax = styled.div`
  max-width: 460px;
`;

