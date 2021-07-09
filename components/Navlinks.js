import { Link } from "react-scroll";

function Navlinks() {
  return (
    <>
      <ul>
        <li>
          <Link activeClass="active" to="home" spy={true} smooth={true} offset={0} duration={500}>Home</Link>
        </li>
        <li>
          <Link activeClass="active" to="features" spy={true} smooth={true} offset={0} duration={500}>Feature</Link>
        </li>
        <li>
          <Link activeClass="active" to="pricing" spy={true} smooth={true} offset={0} duration={500}>Pricing</Link>
        </li>
        <li>
          <Link activeClass="active" to="testimonial" spy={true} smooth={true} offset={0} duration={500}>Testimonial</Link>
        </li>
      </ul>
    </>
  );
}

export default Navlinks;
