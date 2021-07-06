import React, { useState } from 'react';
import styles from '../../styles/Price.module.css';
import PriceCard from '../Price_Card/PriceCard';

function PricingTab() {
    const [monthlyPlanaIsActive, setmonthlyPlanaIsActive] = useState(true);
    const [annualPlanIsActive, setannualPlanIsActive] = useState(false);
     
    const activeMonthlyPlan = () => {
        setannualPlanIsActive(false);
        setmonthlyPlanaIsActive(true)
    }

    const activeAnnualPlan = () => {
        setannualPlanIsActive(true);
        setmonthlyPlanaIsActive(false)
    }

    return (
        <div className={styles.tabs}> 
          <div className={styles.buttons}>
            <span 
            onClick={activeMonthlyPlan}
            style={{
                background:  monthlyPlanaIsActive ? '#fff' : 'none',
                boxShadow : monthlyPlanaIsActive ? '1px 2px 10px 1px #d3d3d3a1' : 'none'
            }}
            >Monthly Plan</span>
            <span 
            onClick={activeAnnualPlan}
            style={{
                background:  annualPlanIsActive ? '#fff' : 'none',
                boxShadow : annualPlanIsActive ? '1px 2px 10px 1px #d3d3d3a1' : 'none'
            }}
            >Annual Plan</span>
          </div>  
          <div className={styles.tab_content_1} style={{
              display : monthlyPlanaIsActive ? 'block' : 'none',
            }}>
            <div className={styles.pricing}>
                <PriceCard 
                  heading="Free Plan"
                  subHeading="For small teams or office"
                  price="$0"
                  duration="Monthly"
                  text="Start free trail"
                />
                  <PriceCard 
                  heading="Business King"
                  subHeading="For Enterprice business"
                  price="$15"
                  duration="Monthly"
                  text="Create account"
                  trail="or Start 10 Days trail"
                />
                  <PriceCard 
                  heading="Pro master"
                  subHeading="For Pro leverl developers"
                  price="$24"
                  duration="Monthly"
                  text="Create account"
                  trail="or Start 10 Days trail"
                />
                
            </div>
          </div>  
           <div className={styles.tab_content_2} style={{display : annualPlanIsActive ? 'block' : 'none'}}>
            <div className={styles.pricing}>
                <PriceCard 
                heading="Free Plan"
                subHeading="For small teams or office"
                price="$0"
                duration="Annual"
                text="Start free trail"
            />
                <PriceCard 
                heading="Business King"
                subHeading="For Enterprice business"
                price="$25"
                duration="Annual"
                text="Create account"
                trail="or Start 10 Days trail"
            />
                <PriceCard 
                heading="Pro Master"
                subHeading="For Pro leverl developers"
                price="$39"
                duration="Annual"
                text="Create account"
                trail="or Start 10 Days trail"
            />
            </div>
          </div>    
        </div>
    )
}

export default PricingTab;
