import PlanCard from "../../Componants/PlanCard/PlanCard"
import { plansData } from "../../data/planData";

import "./UpgradePlan.scss";


const UpgradePlan = () => {
  return (

    <div className="upgrade-plan-main-container">

      <div className="upgrade-plan-top-text">
        <div className="head-text">Loved Our Platform? Upgrade Subscription to Unlock More Benefit</div>
        <div className="subhead-text">if the listed benefits not according to you needs then choose enterprise plan</div>
      </div>

      <div className="plan-card-list">
        {
          plansData.map((item, index) => {
            return (
              <PlanCard key={index} {...item} />
            )
          })
        }
      </div>
    </div>

  )
}

export default UpgradePlan