import { icons } from "../../data/iconsData";
import ButtonComponant from "../ButtonComponant/ButtonComponant";
import "./PlanCard.scss";

interface propsModel {
    name : string,
    amount : number,
    summary : string,
    secondSummary : string,
    recommend ?: boolean,
    pointersList : string[]
}

const PlanCard = ({name, amount, summary, secondSummary, pointersList, recommend}:propsModel) => {
  return (
    <div className="plan-card-container">

      <div className={`plan-name ${recommend ? "filled-header" : ""}`}>{name}</div>

      <div className="plan-info-container">

        <div className="price-info-container">
          <div className="plan-price-container">US$<span>{amount}</span></div>
          <div className="charges-type-text">/month</div>
        </div>
        <div className="plan-detail-about-text">{secondSummary}</div>


        <div className="plan-buy-button">
          <ButtonComponant type={recommend ? "contained" : "outlined"} text="Get Started" endIcon={<icons.ArrowForwardIosRounded />} />
        </div>

        <div className="about-plan">{summary}</div>


        {
          pointersList.map((data, index) => {
            return (
              <div className="plan-detail-point" key={index}>
                <div className="detail-point-icon">{<icons.CheckCircleOutlineIcon fontSize="small" />}</div>
                <div className="detail-point-text">{data}</div>
              </div>
            )
          })
        }



        <div className="plan-additional-text"></div>
      </div>

    </div>
  )
}

export default PlanCard