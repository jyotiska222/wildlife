import PropTypes from "prop-types";
import "./Header1.css";

const Header1 = ({ className = "" }) => {
  return (
    <div className={`header1 ${className}`}>
      <section className="barckground" />
      <a className="text-logo">Wildlife</a>
      <div className="navigation">
        <div className="components-of-nav-bar1">
          <div className="travel">
            <a className="travel-guide">Travel Guide</a>
            <div className="about">
              <a className="about-us">About Us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Header1.propTypes = {
  className: PropTypes.string,
};

export default Header1;
