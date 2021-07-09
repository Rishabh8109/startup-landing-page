import {AiFillStar} from 'react-icons/ai';
import styles from '../styles/Testimonial.module.css';

function Rating({rating}) {
    return (
        <>
          <div className={styles.rating}>
            {
              Array.from(Array(5), (_, i) => <span key={i}><AiFillStar /></span>)
            }
          </div>
           <div className={styles.user_rating}>
            {
              Array.from(Array(rating), (_, i) => <span key={i}><AiFillStar /></span>)
            }
          </div>
         
        </>
    )
}

export default Rating;
