import Link from 'next/Link'
import navStyles from "../styles/Navbar.module.css";
import Navbrand from "./Navbrand";

function Navbar() {
  return (
    <>
      <nav className={navStyles.nav}>
        <div className={navStyles.container}>
          <a href="/">
            <Navbrand />
          </a>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li> 
            <li>
              <Link href="/">Feature</Link>
            </li>
            <li>
              <Link href="/">Pricing</Link>
            </li> 
            <li>
              <Link href="/">Testimonial</Link>
            </li>
          </ul>
          <button>
            Get Started
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
