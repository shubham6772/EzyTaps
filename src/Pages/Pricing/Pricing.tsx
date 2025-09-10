import "./Pricing.scss";
import { plansDataforPricing } from "../../data/planData";
import PlanCard from "../../Componants/PlanCard/PlanCard";

const Pricing = () => {
  return (

    <div className="pricing-main-container">

      <div className="headlines-text-container">
        <div className="pricing-headlines-text">Clear and Fair Pricing for Everyone</div>
        <div className="pricing-headlines-subtext">know your audience and boost your business with our platform</div>
      </div>

      <div className="pricing-card-container">
        <div className="pricing-card-list">
          {
            plansDataforPricing.map((item, index) => {
              return (
                <PlanCard key={index} {...item} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Pricing