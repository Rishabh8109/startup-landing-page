import styles from "../styles/Feature.module.css";
import {AiTwotoneThunderbolt} from "react-icons/ai";
import {FaBriefcase , FaChessKing} from "react-icons/fa";
import {MdChatBubble} from "react-icons/md";

function Features() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>whats the function</p>
      <h2>Meet the feature of product</h2>
      <div className={styles.feature_box}>
        <div className={styles.box}>
          <div className={styles.icon}>
            <AiTwotoneThunderbolt />
          </div>
          <h4>Fast perfomance</h4>
          <p>
            Get your blood tests delivered at home collect a sample from the
            your blood tests
          </p>
        </div>
        <div className={styles.box}>
          <div className={styles.icon}>
            <FaBriefcase />
          </div>
          <h4>Partnership deal perfomance</h4>
          <p>
            Get your blood tests delivered at home collect a sample from the
            your blood tests
          </p>
        </div>
        <div className={styles.box}>
          <div className={styles.icon}>
            <FaChessKing />
          </div>
          <h4>Pro Subcription</h4>
          <p>
            Get your blood tests delivered at home collect a sample from the
            your blood tests
          </p>
        </div>
        <div className={styles.box}>
          <div className={styles.icon}>
            <MdChatBubble />
          </div>
          <h4>Customer Support</h4>
          <p>
            Get your blood tests delivered at home collect a sample from the
            your blood tests
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
