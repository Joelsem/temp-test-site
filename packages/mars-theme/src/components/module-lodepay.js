import React from "react";
import { connect, styled } from "frontity";
import { useTranslation } from 'react-i18next';
import './i18n';

/* Images */
import stableImg from "../img/stable-svg.png"
import mobileImg from "../img/mobile-svg.png"
import instantImg from "../img/instant-svg.png"
import borderlessImg from "../img/borderless-svg.png"
import secureImg from "../img/secure-svg.png"
import distributedImg from "../img/distributed-svg.png"

/* Breakpoints */
const breakpoints = [576, 768, 1320, 1720];
const mq = breakpoints.map(
  bp => `@media (max-width: ${bp}px)`
)

const LodePay = ({ state }) => {
  const { t, i18n } = useTranslation();
  return ( 
    <LodePayContainer>
        <Title>The <b>LODEpay</b> system is for everyone.</Title>
        <P>{t("home.lpay.sub")}</P>

        <TileContainer>
          <Tile>
            <TileImg src={stableImg} />
            <TileTitle>{t("home.lpay.stable")}</TileTitle>
            <TileDesc>{t("home.lpay.stable1")}</TileDesc>
          </Tile>
          <Tile>
            <TileImg src={mobileImg} />
            <TileTitle>{t("home.lpay.mobile")}</TileTitle>
            <TileDesc>{t("home.lpay.mobile1")}</TileDesc>
          </Tile>
          <Tile>
            <TileImg src={instantImg} />
            <TileTitle>{t("home.lpay.instant")}</TileTitle>
            <TileDesc>{t("home.lpay.instant1")}</TileDesc>
          </Tile>
          <Tile>
            <TileImg src={borderlessImg} />
            <TileTitle>{t("home.lpay.borderless")}</TileTitle>
            <TileDesc>{t("home.lpay.borderless1")}</TileDesc>
          </Tile>
          <Tile>
            <TileImg src={secureImg} />
            <TileTitle>{t("home.lpay.secure")}</TileTitle>
            <TileDesc>{t("home.lpay.secure1")}</TileDesc>
          </Tile>
          <Tile>
            <TileImg src={distributedImg} />
            <TileTitle>{t("home.lpay.distributed")}</TileTitle>
            <TileDesc>{t("home.lpay.distributed1")}</TileDesc>
          </Tile>
        </TileContainer>
    </LodePayContainer>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(LodePay);

const TileContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-family: 'Rubik';
  justify-content: space-between;
`;

const Tile = styled.div`
  width: 320px;
  min-width: 320px;
  margin-top: 80px;
`;

const TileImg = styled.img`
`;

const TileTitle = styled.div`
  font-size: 28px;
  font-weight: 500;
  margin-top: 30px;
`;

const TileDesc = styled.div`
  margin-top: 30px;
  font-size: 20px;
  font-weight: 300;
  line-height: 26px;
`;

const P = styled.p`
    max-width: 540px;
    font-size: 20px;
    line-height: 35px;
`;

const Title = styled.div`
    font-size: 60px;
    max-width: 600px;
    margin-top: 200px;
`;

const LodePayContainer = styled.div`
    padding-left: 375px;
    padding-right: 250px;
    margin-top: 200px;
    overflow: hidden;
    color: #314452;
    background-color: #F3F3F3;
    padding-bottom: 350px;
    ${mq[3]} {
      padding-left: 150px;
      padding-right: 150px;
      padding-bottom: 150px;
    }
    ${mq[1]} {
      margin-top: 100px;
    }
    ${mq[0]} {
      padding-left: 50px;
      padding-right: 50px;
    }
    ${Title} {
      flex-basis: 26%;
      ${mq[1]} {
        font-size: 40px;
      }
    }
`;



