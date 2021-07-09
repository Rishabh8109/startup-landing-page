import featureStyle from '../styles/Feature.module.css';
import styles from '../styles/Testimonial.module.css';
import {testimonialData} from '../contants/testimonialData';
import Image from 'next/image';
import Blog from './Blog';
import Rating from './Rating';
import TestimonialCarousel from './carousel/TestimonialCarousel';
import {AiFillStar} from 'react-icons/ai';

function Testimonial() {
    const myLoader = (img_url) => `${img_url}`;
   
    return (
       <>
        <section className={styles.container}>
        <p className={featureStyle.title}>testimonial</p>
            <h1 className={featureStyle.subtitle}>Meet Client Satisfaction</h1>
            <div className={styles.testimonial}>
                <TestimonialCarousel
                 >
                    {
                        testimonialData.map(({id , rating , title , description , img , name , username}) => (
                             <div className={styles.testimonial_card} key={id}>
                                <span>
                                  {
                                    <Rating rating={rating} />
                                  }
                                </span>
                                <h4>{title}</h4>
                                <p className={styles.description}>{description}</p>
                                <div className={styles.testimonial_footer}>
                                    <Image 
                                    loader={() => myLoader(img)}
                                    src="users.jpg" 
                                    alt="members"
                                    width={50} 
                                    height={50}
                                    /> 
                                    <div className={styles.userinfo}>
                                     <h5>{name}</h5> 
                                     <p>{username}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </TestimonialCarousel>
            </div>
        </section>
        <section>
          <Blog />
        </section>
       </>
    )
}

export default Testimonial;
