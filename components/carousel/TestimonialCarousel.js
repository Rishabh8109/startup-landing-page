import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styles from '../../styles/Testimonial.module.css';
import {BsArrowLeft , BsArrowRight} from 'react-icons/bs';

function TestimonialCarousel({children}) {
    const arrowStyle = {
        position: 'absolute',
        top : '50%',
        zIndex :'1',
        fontSize : '1.5rem',
        opactiy : '.5',
        cursor : 'pointer',
        transform :'translate(-50% , -50%)',
        color: "grey"
     }

    // carousedl setting
    const setting = {
         showIndicators : false,
         showStatus : false,
         swipeable : true,
         renderArrowPrev : (onClickHandler) => (
            <BsArrowLeft  onClick={onClickHandler} className={styles.arrowLeft} style={{
                ...arrowStyle,
                left : '2%'
            }}
          />
        ),
        renderArrowNext : (onClickHandler) => (
         <BsArrowRight  onClick={onClickHandler} className={styles.arrowRight} style={{
            ...arrowStyle,
             right : '0%'
          }}
          />
        ),
        showThumbs : false,
        infiniteLoop : true,
        autoPlay : true,
    }
    return (
        <Carousel
         {...setting}
         className={styles.carousel}
        >
           {children} 
        </Carousel>
    )
}

export default TestimonialCarousel;
