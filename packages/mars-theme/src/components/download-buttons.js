import React from "react";
import { connect, styled } from "frontity";
import { useTranslation } from 'react-i18next';
import './i18n';

/* Images */
import downloadAppStore from "../img/download-app-store.png"
import downloadGooglePlay from "../img/download-google-play.png"

/* Breakpoints */
const breakpoints = [576, 768, 1320, 1720];
const mq = breakpoints.map(
  bp => `@media (max-width: ${bp}px)`
)

const DownloadButtons = ({ state }) => {
  const { t, i18n } = useTranslation();
  return (
    <DownloadWrapper>
      <DownloadLabel>Download the APP and <br />
        <b>Get Your Virtual Card Now.</b>
      </DownloadLabel>

      <Row>
        <DownloadButton src={downloadAppStore} /><DownloadButton src={downloadGooglePlay} />
      </Row>
    </DownloadWrapper>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(DownloadButtons);

const DownloadWrapper = styled.div`
  ${mq[2]} {
    display:flex;
    flex-direction: column;
  }
`;

const DownloadButton = styled.img`
  width: 188px;
  margin-right: 15px;
  cursor: pointer;
  ${mq[2]} {
    margin-bottom: 10px;
  }
  ${mq[0]} {
    width: 137px;
  }
`;

const Row = styled.div`
  display: flex;

  ${mq[2]} {
    flex-direction: column;
  }
`;

const DownloadLabel = styled.p`
  margin-top: 60px;
  color:grey;
  font-size:12px;
  ${mq[3]} {
    padding-left: 10px;
    font-size: 16px;
  }
  ${mq[0]} {
    font-size: 12px;
  }
`;