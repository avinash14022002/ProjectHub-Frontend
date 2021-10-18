import React from 'react';
import { Link } from 'react-router-dom'
import {
  Landingpage,
  Blobs,
  PinkBlob,
  WhiteBlob,
  PurpleBlob,
  MainContent,
  Topic,
  Circle,
  Title,
  SubText,
  CTA,
  Lb,
  ManImage
} from './LandingPageElements';
import Pink from "../../assets/landing-page/BlobPink.png";
import Purple from "../../assets/landing-page/BlobPurple.png";
import White from "../../assets/landing-page/BlobWhite.png";
import Arrow from "../../assets/landing-page/ArrowRight.svg"
import Man from "../../assets/landing-page/ProjectHub1.png";
import './LandingPage.css';

const LandingPage = () => {
    return (
      <div className="page-container">
        <div className ="content-wrap">
          <Landingpage>
              <Blobs>
                  <PinkBlob>
                      <img src={Pink} alt="Pink Blob" width="400" height="400"/>
                  </PinkBlob>

                  <WhiteBlob>
                      <img src={White} alt="White Blob" width="400" height="400"/>
                  </WhiteBlob>

                  <PurpleBlob>
                      <img src={Purple} alt="Purple Blob" width="400" height="400"/>
                  </PurpleBlob>
              </Blobs>
              <MainContent id="home">
                  <Lb id="leftBlock">
                      <Topic>
                          <Circle/>
                          <span>VIT Pune</span>
                      </Topic>
                      <Title>Project Hub</Title>
                      <SubText>All in one portal for Projects and Assignments !</SubText>
                      <Link to="/sign-in">
                        <CTA>
                            Get started &nbsp;
                            <img src={Arrow} alt="cta" width="100" height="100" />
                        </CTA>
                      </Link>
                  </Lb>
                  <ManImage src={Man} alt="Image of a Man" width="400" height="400"/>
              </MainContent>
          </Landingpage>
        </div>
      </div>
    )
};

export default LandingPage;