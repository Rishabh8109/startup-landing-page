import styles from "../styles/Feature.module.css";
import Image from 'next/image'
import {AiTwotoneThunderbolt} from "react-icons/ai";
import {FaBriefcase , FaChessKing} from "react-icons/fa";
import {MdChatBubble} from "react-icons/md";
import {BsFillPlayFill} from 'react-icons/bs';
import vImage from '../public/images/vImage.jpg';

function Features() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>whats the function</p>
      <h2 className={styles.subtitle}>Meet the feature of product</h2>
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
      <div className={styles.feature_box}>
        <div className={styles.v_box}>
            <Image 
              src={vImage}
              width={700}
              height={550}
              alt="v_image"
            />
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={styles.blob}>
              <path fill="#F1C21B" d="M42.3,24.6C28.6,48.1,-26.7,47.7,-40.7,24C-54.7,0.3,-27.3,-46.8,0.3,-46.6C28,-46.4,56,1,42.3,24.6Z" transform="translate(100 100)" />
           </svg>
           <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={styles.blob2}>
              <path fill="#FF0066" d="M37.5,8.5C37.5,30.2,18.8,60.4,-5,60.4C-28.8,60.4,-57.6,30.2,-57.6,8.5C-57.6,-13.2,-28.8,-26.3,-5,-26.3C18.8,-26.3,37.5,-13.2,37.5,8.5Z" transform="translate(100 100)" />
            </svg>
           <div className={styles.icon}>
             <BsFillPlayFill />
           </div>
        </div> 
        <div className={styles.content_box}>
         <p className={styles.content_title}>our services</p>
         <h1 className={styles.content_subtitle}>Business Goals Achieved with Design</h1>
          <div className={styles.row}>
            <div className={styles.col}>
              <div className={styles.icon}>
                <FaChessKing />
              </div>
              <div className={styles.content}>
                <h4>Smart Feature</h4>
                <p>
                  Get your blood tests delivered at home collect a sample from the
                  your blood tests
                </p>
              </div>
            </div>
             <div className={styles.col}>
              <div className={styles.icon}>
                <FaBriefcase />
              </div>
              <div className={styles.content}>
                <h4>Secure Content</h4>
                <p>
                  Get your blood tests delivered at home collect a sample from the
                  your blood tests
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
