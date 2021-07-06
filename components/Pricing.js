import styles from '../styles/Price.module.css';
import featureStyles from '../styles/Feature.module.css';
import PricingTab from './Tabs/PricingTab';

function Pricing() {
    return (
        <div className={styles.container}>
            <p className={featureStyles.title}>Pricing Plan</p>
            <h2 className={featureStyles.subtitle}>Choose Your Pricing Policy</h2>
            <PricingTab />
        </div>
    )
}

export default Pricing;
