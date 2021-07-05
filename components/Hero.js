import styles from '../styles/Hero.module.css';

function Hero() {
    return (
        <div className={styles.container}>
          <h1 className={styles.title}>Top Quality Digital Products To Explore</h1>
          <p className={styles.description}>
            Get your blood tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.
          </p>
          <p className={styles.button}>
            <button>
               Explore
            </button>
          </p>
        </div>
    )
}

export default Hero;
