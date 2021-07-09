import styles from '../styles/Navbar.module.css';

function Backdrop({open , setopen}) {
    return (
        <div className={styles.backdrop} style={{
            display: open ? 'block' : 'none'
        }}
        onClick={() => setopen(false)}
        ></div>
    )
}

export default Backdrop
