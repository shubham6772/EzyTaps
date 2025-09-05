import type React from "react"
import ConverterInputBar from "../../Componants/ConverterInputBar/ConverterInputBar"
import WaveArrowSVG from "../../Componants/SVG/WaveArrowSVG";
import MultiArrowSVG from "../../Componants/SVG/MultiArrowSVG";
import ButtonComponant from "../../Componants/ButtonComponant/ButtonComponant";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

import "./Landing.scss";


const icons = {
  ArrowForwardIosRoundedIcon: <ArrowForwardIosRoundedIcon />,
}

const Landing: React.FC = () => {

  return (
    <>
      <div className="landing-container">

        <div className="landing-wave-arrow-svg">
          <WaveArrowSVG />
        </div>

        <div className="landing-text-and-demo-container">
          <div className="landing-text">
            <h1 className="landing-main-headline">Know Your Audience</h1>
            <p className="landing-main-sub-headline">Use our Service to Build the shorten URL and Track everything inside our platform</p>
          </div>



          <div className="landing-converter-card">
            <ConverterInputBar fontSize="large" bold="high" label="Your Long URL" longLable="Paste your long link here" />

            <div className="landing-demo-convert-button-container">
              {/* <div className="landing-get-link-button">
                <div className="landing-get-link-button-txt">
                  Get your link
                </div>
                <JumpingDotsSVG />
              </div> */}
              <ButtonComponant type="contained" text="Get Your Link" endIcon={icons.ArrowForwardIosRoundedIcon} />
            </div>

          </div>


        </div>

        <div className="landing-multi-arrow-svg">
          <MultiArrowSVG />
        </div>

      </div>

      <div className="landing-info-cards-container">

        <div className="landing-engagement-text">
          <p className="landing-engagement-text-child-top landing-engagement-text-smaller">Everyone is just one click away</p>
          <h2 className="landing-engagement-text-child-mid">Connect With Your Audience</h2>
          <p className="landing-engagement-text-child-last landing-engagement-text-smaller">The One Stop Solution to Create Short Links & Track Everything</p>
        </div>

        <div className="landing-pricing-button">
          <ButtonComponant type="contained" text="Get Started for free" endIcon={icons.ArrowForwardIosRoundedIcon} />
        </div>

      </div>
    </>
  )
}

export default Landing