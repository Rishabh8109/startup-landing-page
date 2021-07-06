import styles from "../styles/Feature.module.css";
import Image from "next/image";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { FaBriefcase, FaChessKing } from "react-icons/fa";
import { MdChatBubble } from "react-icons/md";
import { BsFillPlayFill } from "react-icons/bs";
import vImage from "../public/images/vImage.jpg";
import vImage2 from "../public/images/vImage2.jpg";
import Button from "./Button";

function Features() {
  return (
    <>
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
            <Image src={vImage} width={550} height={450} alt="v_image" />
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.blob}
            >
              <path
                fill="#F1C21B"
                d="M42.3,24.6C28.6,48.1,-26.7,47.7,-40.7,24C-54.7,0.3,-27.3,-46.8,0.3,-46.6C28,-46.4,56,1,42.3,24.6Z"
                transform="translate(100 100)"
              />
            </svg>
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.blob2}
            >
              <path
                fill="#FF0066"
                d="M37.5,8.5C37.5,30.2,18.8,60.4,-5,60.4C-28.8,60.4,-57.6,30.2,-57.6,8.5C-57.6,-13.2,-28.8,-26.3,-5,-26.3C18.8,-26.3,37.5,-13.2,37.5,8.5Z"
                transform="translate(100 100)"
              />
            </svg>
            <div className={styles.icon}>
              <BsFillPlayFill />
            </div>
          </div>
          <div className={styles.content_box}>
            <p className={styles.content_title}>our services</p>
            <h1 className={styles.content_subtitle}>
              Business Goals Achieved with Design
            </h1>
            <div className={styles.row}>
              <div className={styles.col}>
                <div className={styles.icon}>
                  <FaChessKing />
                </div>
                <div className={styles.content}>
                  <h4>Smart Feature</h4>
                  <p>
                    Get your blood tests delivered at home collect a sample from
                    the your blood tests
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
                    Get your blood tests delivered at home collect a sample from
                    the your blood tests
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.Quality_feature_container}>
          <p className={styles.title}>quality feature</p>
          <h2 className={styles.subtitle}>Amazing useful features</h2>
          <div className={styles.Quality_feature}>
            <div className={styles.box}>
              <div className={styles.icon}>
                <AiTwotoneThunderbolt />
              </div>
              <div className={styles.box_content}>
                <h4>Fast perfomance</h4>
                <p>
                  Let’s just get this out of the way - there will always be a
                  kit version of Edu flow. Paid subscriptions allow us to
                  continue helping learners around the world.
                </p>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.icon}>
                <FaBriefcase />
              </div>
              <div className={styles.box_content}>
                <h4>Partnership deal perfomance</h4>
                <p>
                  Let’s just get this out of the way - there will always be a
                  kit version of Edu flow. Paid subscriptions allow us to
                  continue helping learners around the world.
                </p>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.icon}>
                <FaChessKing />
              </div>
              <div className={styles.box_content}>
                <h4>Pro Subcription</h4>
                <p>
                  Let’s just get this out of the way - there will always be a
                  kit version of Edu flow. Paid subscriptions allow us to
                  continue helping learners around the world.
                </p>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.icon}>
                <MdChatBubble />
              </div>
              <div className={styles.box_content}>
                <h4>Customer Support</h4>
                <p>
                  Let’s just get this out of the way - there will always be a
                  kit version of Edu flow. Paid subscriptions allow us to
                  continue helping learners around the world.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.feature_box}>
          <div className={styles.content_box_2}>
            <p className={styles.title}>core feature</p>
            <h1 className={styles.subtitle}>
              Smart Jackpots that you may love this anytime & anywhere
            </h1>
            <p className={styles.description}>
              Get your tests delivered at let home collect sample from the
              victory of the managements that supplies best design system
              guidelines ever.
            </p>
            <Button text="Get Started" />
          </div>
          <div className={styles.lady_image}>
            <Image src={vImage2} width={500} height={400} alt="v_image2" />
          </div>
        </div>
      </div>
      <section className={styles.functions}>
        <div className={styles.container}>
           <p className={styles.title}>whats the function</p>
           <h1 className={styles.subtitle}>Let's see how it works</h1>
          <div className={styles.functions_box}>
            <div className={styles.box}>
              <div className={styles.numbers}>01</div>
              <h4>Set disbursement Instructions</h4>
              <p>
                Get your blood tests delivered at home collect a sample from the
                your blood tests
              </p>
            </div>
            <div className={styles.box}>
              <div className={styles.numbers}>02</div>
              <h4>Assembly retrieves funds from your account</h4>
              <p>
                Get your blood tests delivered at home collect a sample from the
                your blood tests
              </p>
            </div>
            <div className={styles.box}>
              <div className={styles.numbers}>03</div>
              <h4>Assembly initiates disbursement</h4>
              <p>
                Get your blood tests delivered at home collect a sample from the
                your blood tests
              </p>
            </div>
            <div className={styles.box}>
              <div className={styles.numbers}>04</div>
              <h4>Customer receives funds payment</h4>
              <p>
                Get your blood tests delivered at home collect a sample from the
                your blood tests
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
