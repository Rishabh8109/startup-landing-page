
import navStyles from "../styles/Navbar.module.css";
import Navbrand from "./Navbrand";
import Navlinks from './Navlinks';
import {BiMenu} from 'react-icons/bi';

function Navbar({setopen}) {
  return (
    <>
      <nav className={navStyles.nav}>
      <div className={navStyles.container}>
          <BiMenu className={navStyles.menu} onClick={() => setopen(true)} />                                  
           <Navbrand />
           <Navlinks />
          <button>
            Get Started
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
