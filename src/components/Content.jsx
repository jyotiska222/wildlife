import PropTypes from "prop-types";
import "./Content.css";

const Content = ({ className = "" }) => {
  return (
    <header className={`content1 ${className}`}>
      <div className="header2">
        <div className="barckground1" />
        <a className="text-logo1">Wildlife</a>
        <nav className="nav-bar">
          <nav className="components-of-nav-bar2">
            <div className="about-events">
              <a className="about-us1">About Us</a>
            </div>
            <div className="about-events1">
              <a className="events1">Events</a>
            </div>
            <a className="travel-guide1">Travel Guide</a>
          </nav>
        </nav>
      </div>
      <div className="get-ticket">
        <div className="button" />
        <a className="get-ticket1">Get Ticket</a>
      </div>
      <div className="option-bottom">
        <div className="bottom-logo1">
          <div className="placeholders" />
          <div className="placeholders1" />
          <div className="placeholders2" />
        </div>
      </div>
    </header>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
