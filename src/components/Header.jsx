import PropTypes from "prop-types";
import "./Header.css";

const Header = ({ className = "" }) => {
  return (
    <nav className={`header ${className}`}>
      <section className="header-child" />
      <div className="text-logo-link">Text Logo</div>
      <nav className="components-of-nav-bar">
        <div className="artist">Artist</div>
        <div className="events">Events</div>
        <div className="marchendice">Marchendice</div>
      </nav>
    </nav>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
