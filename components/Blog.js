import React, { useEffect, useState } from "react";
import featureStyle from "../styles/Feature.module.css";
import styles from "../styles/Testimonial.module.css";
import Image from "next/image";
import TestimonialCarousel from "./carousel/TestimonialCarousel";
import { blogData } from "../contants/blogData";
import { RiCommunityFill } from "react-icons/ri";
import { BsFillChatSquareDotsFill } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

function Blog() {
  const [currentWidth, setcurrentWidth] = useState(0);
  const [width, setwidth] = useState(0);
  const myLoader = (img_url) => `${img_url}`;

  useEffect(() => {
    function setWidth() {
      let myWidth = window.innerWidth;
      setwidth(myWidth);
    }
    window.addEventListener("resize", setWidth);
    setcurrentWidth(window.screen.width);
    setwidth(window.screen.width);

    return () => {
      window.removeEventListener("resize", setWidth);
    };
  }, []);

  return (
    <div className={featureStyle.container}>
      <p className={featureStyle.title}>our blog</p>
      <h1 className={styles.subtitle}>
        Explore our products for your business solution
      </h1>
      <section className={styles.testimonial}>
        <div className={styles.blogs}>
          {width > 500 ? (
            <TestimonialCarousel
              style={{
                padding: "20px 0",
              }}
            >
              <div className={styles.slide}>
                {blogData.map(({ id, title, img, name, date }, index) => (
                  <React.Fragment key={id}>
                    {index < 3 && (
                      <div className={styles.card} key={id}>
                        <div className={styles.cardImage}>
                          <Image
                            loader={() => myLoader(img)}
                            src="users.jpg"
                            alt="members"
                            width={350}
                            height={240}
                          />
                        </div>
                        <div className={styles.cardBody}>
                          <h4>{title}</h4>
                        </div>
                        <div className={styles.cardFooter}>
                          <span>{name}</span>
                          <span>{date}</span>
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
              <div className={styles.slide}>
                {blogData.map(({ id, title, img, name, date }, index) => (
                  <React.Fragment key={id}>
                    {index > 2 && (
                      <div className={styles.card}>
                        <div className={styles.cardImage}>
                          <Image
                            loader={() => myLoader(img)}
                            src="users.jpg"
                            alt="members"
                            width={350}
                            height={240}
                          />
                        </div>
                        <div className={styles.cardBody}>
                          <h4>{title}</h4>
                        </div>
                        <div className={styles.cardFooter}>
                          <span>{name}</span>
                          <span>{date}</span>
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </TestimonialCarousel>
          ) : (
            <div className={styles.blogSlides}>
              <TestimonialCarousel>
                {blogData.map(({ id, title, img, name, date }) => (
                  <div className={styles.card} key={id}>
                    <div className={styles.cardImage}>
                      <Image
                        loader={() => myLoader(img)}
                        src="users.jpg"
                        alt="members"
                        width={350}
                        height={240}
                      />
                    </div>
                    <div className={styles.cardBody}>
                      <h4>{title}</h4>
                    </div>
                    <div className={styles.cardFooter}>
                      <span>{name}</span>
                      <span>{date}</span>
                    </div>
                  </div>
                ))}
              </TestimonialCarousel>
            </div>
          )}
        </div>
      </section>
      <section className={styles.subcription}>
        <h1>Subscribe to our Blog</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elitsed eiusmod
          tempor incididunt labore dolore.
        </p>
        <div className={styles.input}>
          <input type="email" placeholder="Enter your email address" />
          <button>Subscribe</button>
        </div>
      </section>
      <section className={styles.wrapper}>
        <div className={styles.row}>
          <div className={styles.col}>
            <RiCommunityFill className={styles.icon} />
            <h4>Join the Community</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit sed
              eiusmod tempor.
            </p>
          </div>
          <div className={styles.col}>
            <BsFillChatSquareDotsFill className={styles.icon} />
            <h4>Chat Communication</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit sed
              eiusmod tempor.
            </p>
          </div>
          <div className={styles.col}>
            <AiFillGithub className={styles.icon} />
            <h4>Github Access</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit sed
              eiusmod tempor.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
