import Navbrand from "./Navbrand";
import Navlinks from "./Navlinks";
import navStyles from '../styles/Navbar.module.css';

function Footer() {
    return (
        <section className={navStyles.container}>
          <div className={navStyles.footer}>
            <Navbrand />
            <Navlinks />
            <p>Copyright by 2021 RedQ, Inc</p>
          </div>
        </section>
    )
}

export default Footer;
