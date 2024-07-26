import PropTypes from "prop-types";
import "./Card01.css";

const Card = ({ className = "" }) => {
  return (
    <div className={`card01 ${className}`}>
      <img className="card01-child" alt="" src="/rectangle-9.svg" />
      <h3 className="event-name">EVENT NAME</h3>
      <div className="info">
        <img
          className="event-img-icon"
          loading="lazy"
          alt=""
          src="/event-img@2x.png"
        />
        <div className="date-time">
          <b className="from-260224-to">From 26.02.24 to 02.03.24</b>
          <b className="from-0200pm-to">From 02.00PM to 04.00PM</b>
        </div>
      </div>
      <div className="register">
        <img
          className="resister-bottom-icon"
          loading="lazy"
          alt=""
          src="/resister-bottom@2x.png"
        />
      </div>
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
};

export default Card;
