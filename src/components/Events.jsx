import PropTypes from "prop-types";
import "./Events.css";

const Events = ({ className = "" }) => {
  return (
    <div className={`events2 ${className}`}>
      <div className="sectionn-2">
        <div className="sectionn-2-child" />
      </div>
      <div className="event-cards">
        <div className="card01">
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
      </div>
      <div className="card02">
        <img className="card02-child" alt="" src="/rectangle-9.svg" />
        <h3 className="event-name1">EVENT NAME</h3>
        <div className="images">
          <img
            className="event-img-icon1"
            loading="lazy"
            alt=""
            src="/event-img@2x.png"
          />
          <div className="durations">
            <b className="from-260224-to1">From 26.02.24 to 02.03.24</b>
            <b className="from-0200pm-to1">From 02.00PM to 04.00PM</b>
          </div>
        </div>
        <div className="registers">
          <img
            className="resister-bottom-icon2"
            loading="lazy"
            alt=""
            src="/resister-bottom@2x.png"
          />
        </div>
      </div>
      <div className="card03">
        <img className="card03-child" alt="" src="/rectangle-9.svg" />
        <h3 className="event-name2">EVENT NAME</h3>
        <div className="event-img-parent">
          <img
            className="event-img-icon2"
            loading="lazy"
            alt=""
            src="/event-img@2x.png"
          />
          <div className="from-260224-to-020324-parent">
            <b className="from-260224-to2">From 26.02.24 to 02.03.24</b>
            <b className="from-0200pm-to2">From 02.00PM to 04.00PM</b>
          </div>
        </div>
        <div className="resister-bottom-wrapper">
          <img
            className="resister-bottom-icon1"
            loading="lazy"
            alt=""
            src="/resister-bottom@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

Events.propTypes = {
  className: PropTypes.string,
};

export default Events;
