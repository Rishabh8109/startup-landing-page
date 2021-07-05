import Link from 'next/link'
import navStyles from "../styles/Navbar.module.css";
import Navbrand from "./Navbrand";

function Navbar() {
  return (
    <>
      <nav className={navStyles.nav}>
        <div className={navStyles.container}>
          <Link href="/">
            <Navbrand />
          </Link>
          <ul>
            <li>
              <Link href="#home">Home</Link>
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
