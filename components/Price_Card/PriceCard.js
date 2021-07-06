import styles from  '../../styles/Price.module.css';
import {AiFillCheckCircle} from 'react-icons/ai';
import Button from '../Button';

function PriceCard({
    heading,
    subHeading,
    duration,
    price,
    text,
    trail
}) {
    return (
        <div className={styles.price_card}>
           <h4>{heading}</h4> 
           <p>{subHeading}</p> 
           <ul>
             <li>
               <span><AiFillCheckCircle /></span>
               Drag & Drop builder
             </li>  
             <li>
               <span><AiFillCheckCircle /></span>
               1000 of Templetes
             </li>  
             <li>
               <span><AiFillCheckCircle /></span>
               Blog Support Tools
             </li> 
              <li>
               <span><AiFillCheckCircle /></span>
               eCommerce Store
             </li>
           </ul>
          <div className={styles.cardFooter}>
            <h3>
              {price}
               <span>/{duration}</span>
            </h3>
            <Button text={text}/>
            <p>{trail && trail}</p>
          </div>
        </div>
    )
}

export default PriceCard;
