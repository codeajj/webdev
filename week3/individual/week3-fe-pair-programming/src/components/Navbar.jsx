import logo from '../assets/images/logo.svg'
import SocialLink from './SocialLink';
import SocialLinks from './SocialLinks';

const Navbar = () => {
  return (
    <div>
  <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} className="nav-logo" alt="backroads" />
        <button type="button" className="nav-toggle" id="nav-toggle">
          <i className="fas fa-bars" />
        </button>
      </div>

    <Pagelinks parent="nav-links" itemClass="nav-link"/>
    <SocialLinks parent="nav-icons" itemClass="nav-icon"/>
    </div>
  </nav>
</div>

  );
};

export default Navbar;