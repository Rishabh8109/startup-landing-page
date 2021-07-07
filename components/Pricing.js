import styles from "../styles/Price.module.css";
import featureStyles from "../styles/Feature.module.css";
import PricingTab from "./Tabs/PricingTab";
import Image from "next/image";
import { members } from "../contants/members";
import {FaFacebookF} from 'react-icons/fa';
import {AiOutlineTwitter} from 'react-icons/ai';
import {AiOutlineInstagram} from 'react-icons/ai';

function Pricing() {
  return (
    <div className={styles.container}>
      <p className={featureStyles.title}>Pricing Plan</p>
      <h2 className={featureStyles.subtitle}>Choose Your Pricing Policy</h2>
      <PricingTab />
      <div className={styles.team}>
        <p className={featureStyles.title}>Pricing Plan</p>
        <h2 className={featureStyles.subtitle}>
          The most qualified and talented individuals
        </h2>
        <div className={styles.members}>
          {members.map(({ img_url, name, post }) => (
            <>
              <div className={styles.member_card}>
                <img src={img_url} alt="members" />
                <div className={styles.member_data}>
                  <h4>{name}</h4>
                  <p>{post}</p>
                </div>
                <div className={styles.social_media_account}>
                   <p>
                     <FaFacebookF />
                   </p>
                    <p>
                     <AiOutlineTwitter />
                   </p> 
                    <p>
                     <AiOutlineInstagram />
                   </p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pricing;
