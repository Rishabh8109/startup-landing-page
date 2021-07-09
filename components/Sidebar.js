import Navlinks from './Navlinks';
import styles from '../styles/Navbar.module.css';
import {MdClose} from 'react-icons/md';


function Sidebar({open , setopen}) {
    const sidebarStyle = {
        width: "80vw",
        backgroundColor: "white",
        height: "100%",
        position: "fixed",
        top: "0",
        left:"0",
        zIndex: "99",
        transform: open ? 'translateX(0)' : 'translateX(-80vw)',
        transition : 'all .4s ease-in-out'
    }
    return (
        <div className={styles.sidebar} style={sidebarStyle}>
            <Navlinks />
            <MdClose className={styles.closeIcon} onClick={() => setopen(close)}/>
        </div>
    )
}

export default Sidebar
