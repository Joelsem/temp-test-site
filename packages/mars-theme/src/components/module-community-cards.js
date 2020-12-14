import React from "react";
import { connect, styled } from "frontity";
import { useTranslation } from 'react-i18next';
import './i18n';

/* Images */
import honestMoneyImg from "../img/honest-money-img.png";

/* Breakpoints */
const breakpoints = [576, 768, 1320, 1720];
const mq = breakpoints.map(
  bp => `@media (max-width: ${bp}px)`
)

const CommunityCards = ({ state }) => {
  const { t, i18n } = useTranslation();
  return ( 
    <CommunityContainer>
      <Title>
        {t("home.comu.header")}
        <P>
          {t("home.comu.header1")}
        </P>
      </Title>
      
      <CardRow>
        <CommunityCard>
          <CardPadding>
            <CardTitle>
              {t("home.comu.explore")}
            </CardTitle>
            <CardHR />
            <CardDesc>
              {t("home.comu.explore1")}
              <ul>
                <li>
                  {t("home.comu.explore2")}
                </li>
                <li>
                  {t("home.comu.explore3")}
                </li>
              </ul>
            </CardDesc>
          </CardPadding>
          <CommunityPrimaryButton>
            {t("home.comu.explore4")}
          </CommunityPrimaryButton>
        </CommunityCard>
        <CommunityCard>
          <CardPadding>
            <CardTitle>
              {t("home.comu.dig")}
            </CardTitle>
            <CardHR />
            <CardDesc>
              {t("home.comu.dig1")}
              <ul>
                <li>
                  {t("home.comu.dig2")}
                </li>
                <li>
                  {t("home.comu.dig3")}
                </li>
                <li>
                  {t("home.comu.dig4")}
                </li>
              </ul>
            </CardDesc>
          </CardPadding>
          <CommunityPrimaryButton>
            {t("home.comu.dig5")}
          </CommunityPrimaryButton>
        </CommunityCard>
        <CommunityCard>
          <CardPadding>
            <CardTitle>
              {t("home.comu.stake")}
            </CardTitle>
            <CardHR />
            <CardDesc>
              {t("home.comu.stake1")}
              <ul>
                <li>
                  {t("home.comu.stake2")}
                </li>
                <li>
                  {t("home.comu.stake3")}
                </li>
              </ul>
            </CardDesc>
          </CardPadding>
          <CommunityPrimaryButton>
            {t("home.comu.stake4")}
          </CommunityPrimaryButton>
        </CommunityCard>
      </CardRow>
      <TwoColContainer>
        <CommunityLeftImage src={honestMoneyImg} />
        <HonestContainer>
          <WidthMax>
            <SectionTitle>
              {t("home.honest.header")}
            </SectionTitle>
            <P>
              {t("home.honest.sub")}
              <ListMargin>
                <li>
                  {t("home.honest.1")}
                </li>
                <li>
                  {t("home.honest.2")}
                </li>
                <li>
                  {t("home.honest.3")}
                </li>
              </ListMargin>
              <HonestBtn>
                {t("home.honest.4")}
              </HonestBtn>
            </P>
          </WidthMax>
        </HonestContainer>
      </TwoColContainer>
    </CommunityContainer>
  );
};

export default connect(CommunityCards);

const CommunityCard = styled.div`
  max-width: 370px;
  margin: 55px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #dedede;
  border-radius: 15px;
  background: white;
  box-shadow: 0px 15px 20px #dadada;
`;

const CardPadding = styled.div`
padding: 50px 25px 0px 40px;

`;

const CardTitle = styled.div`
  font-family: 'Rubik';
  font-size: 30px;
  font-weight: 300;
  color: #36AAFF;
  margin-top: 10px;
`;

const CardDesc = styled.div`
  margin-top: 20px;
  font-size: 18px;
  color: #777777;
  max-width: 380px;
`;

const CardHR = styled.div`
  width: 100%;
  border-top: 1px solid #00000014;
  margin-top: 14px;
`;

const HonestBtn = styled.div`
  color: #36AAFF;
  background: white;
  border: none;
  border-radius: 30px;
  padding: 10px;
  max-width: 230px;
  font-weight: 500;
  font-size: 16px;
  box-shadow: 0px 13px 20px #48484860;
  margin-top: 45px;
  cursor: pointer;
  text-align: center;
  font-family: 'Rubik';
`;

const CommunityPrimaryButton = styled.button`
    background: #36AAFF;
    color: white;
    border: none;
    border-radius: 30px;
    padding: 18px 44px;
    max-width: 240px;
    font-weight: 500;
    font-size: 16px;
    box-shadow: 0px 20px 20px #48484860;
    cursor: pointer;
    align-self: center;
    margin-top: 20px;
    margin-bottom: 20px;
`;

const CardRow = styled.div`
  display:flex;
  margin: auto;
  align-items: flex-start;
  
  ${mq[2]} {
    flex-direction: column;
  }
`;

const CommunityContainer = styled.div`
  ${mq[3]} {
    border-radius: 0px;
  }
  border-radius: 0 330px 0 0;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  position: relative;
  overflow: hidden;
  background: rgb(224,224,224);
  background: linear-gradient(180deg,rgba(224,224,224,0.9) 0%,rgba(243,243,252,0) 80%)
`;

const HonestContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  position: relative;
  overflow: hidden;
  padding-left: 50px;
  justify-content: center;
  ${mq[2]} {
    padding-left: 100px;
    padding-bottom: 30px;
  }
  ${mq[1]} {
    padding-left: 50px;
    padding-right: 50px;
  }
`;

const CommunityLeftImage = styled.img`
  position: relative;
  margin-left: 180px;
  ${mq[3]} {
    margin-left: 50px;
  }
  ${mq[2]} {
    display: none;
  }
`;

const P = styled.p`
  max-width: 540px;
  font-size: 20px;
  line-height: 35px;
  color: #314452;
`;

const TwoColContainer = styled.div`
  display:flex;
  margin-top: 100px;
  overflow: hidden;
`;

const Title = styled.div`
  font-family: 'Rubik';
  font-size: 50px;
  max-width: 500px;
  line-height: 60px;
  font-weight: 300;
  margin-bottom: 25px;
  color: #314452;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-top: 200px;
`;

const WidthMax = styled.div`
`;

const SectionTitle = styled.div`
  font-size: 50px;
  max-width: 500px;
  line-height: 60px;
  margin-bottom: 25px;
  color: #314452;
  ${mq[1]} {
    font-size: 40px;
  }
`;

const ListMargin = styled.ol`
  margin-top: 5px;
  font-family: 'Rubik';
  font-weight: 300;
  ${mq[1]} {
    margin-top: 25px;
  }
`;