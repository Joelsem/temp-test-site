import React from "react";
import { connect, styled } from "frontity";
import { useTranslation } from 'react-i18next';
import './i18n';

/* Images */
import lodeLogo from "../img/lode-logo-white.png"

/* Breakpoints */
const breakpoints = [576, 768, 1320, 1720];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const Footer = ({ state }) => {
  const { t, i18n } = useTranslation();
  return ( 
    <FooterContainer>
        <JustifyApart>
            <FlexCol>
                <img src={lodeLogo} css={{width: '184px'}} />
                <Logotext>
                    Ready to free your money? <br />
                    Drop us an email at: <a href="">switch@lode.one</a>
                </Logotext>
            </FlexCol>
            <MailFormContainer>
                The future of <br />
                money starts here.
                <MailForm placeholder="Subscribe and stay tuned!">
                </MailForm>
            </MailFormContainer>
        </JustifyApart>
        <JustifyApart>
            <FooterMenuList>
                <FooterCol>
                    <FooterMenuListTitle>{t("footer.experience")}</FooterMenuListTitle>
                    <a>{t("footer.assets")}</a>
                    <a>{t("footer.lmarket")}</a>
                    <a>{t("footer.lmedia")}</a>
                    <a>{t("footer.social")}</a>
                    <a>{t("footer.uses")}</a>
                </FooterCol>
                <FooterCol>
                    <FooterMenuListTitle>{t("footer.money")}</FooterMenuListTitle>
                    <a>{t("footer.lpaywallet")}</a>
                    <a>{t("footer.card")}</a>
                    <a>{t("footer.affiliate")}</a>
                </FooterCol>
                <FooterCol>
                    <FooterMenuListTitle>{t("footer.about")}</FooterMenuListTitle>
                    <a>{t("footer.whatislode")}</a>
                    <a>{t("footer.press")}</a>
                    <a>{t("footer.projectpaper")}</a>
                    <a>{t("footer.ethos")}</a>
                    <a>{t("footer.faq")}</a>
                    <a>{t("footer.contact")}</a>
                </FooterCol>
                <FooterCol>
                    <FooterMenuListTitle>{t("footer.legal")}</FooterMenuListTitle>
                    <a>{t("footer.privacy")}</a>
                    <a>{t("footer.tos")}</a>
                    <a>{t("footer.toa")}</a>
                    <a>{t("footer.disclaimer")}</a>
                </FooterCol>
            </FooterMenuList>
            <div>
                Social
                Images
            </div>
        </JustifyApart>
        <CopyrightContainer>
            © 2021. LODE ASSOCIATION. {t("footer.copyright")}
        </CopyrightContainer>
    </FooterContainer>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Footer);

const FooterCol = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 50px;

    & > a {
        color: #97a1a8;
        cursor: pointer;
    }

    & > a:hover {
        color: #b9c3ca
    }
`;

const FooterMenuList = styled.div`
    display:flex;
`;

const FooterMenuListTitle = styled.div`
    font-weight: 500;
    margin-bottom: 30px;
`;

const CopyrightContainer = styled.div`
    margin-top: 30px;
    border-top: 3px solid #435461;
    padding-top: 30px;
    color: #97a1a8;
`;

const Logotext = styled.div`
    font-size: 25px;
    font-weight: 400;
    line-height: 32px;
    padding-top: 20px;
`;

const JustifyApart = styled.div`
    display: flex;
    justify-content: space-between;
`;

const FlexCol = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 100px;
`;

const MailFormContainer = styled.div`
    font-size: 30px;
`;

const MailForm = styled.input`
    display: block;
    border:1px solid white;
    border-radius: 40px;
    width: 450px;
    margin-top: 20px;
    background: transparent;
    color: white;
    padding: 20px;
    &::placeholder {
        color: white;
    }
    &:focus {
        outline: none;
    }
`;

const P = styled.p`
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
`;

const FooterContainer = styled.div`
font-family:'Rubik';
    background: #314452;
    background-position: right;
    display:flex;
    padding-left: 200px;
    padding-right: 200px;
    padding-top: 200px;
    padding-bottom: 100px;
    overflow: hidden;
    color: white;
    flex-direction: column;
    ${Container} {
      color: white;
      width: 500px;
      justify-content: center;
    }
    ${Title} {
      font-size: 40px;
      font-family: 'Rubik';
    }
  ${P} {
    font-size: 18px;
  }
  ${mq[1]} {
      padding-left: 25px;
  }
`;



