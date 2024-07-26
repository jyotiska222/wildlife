import PropTypes from "prop-types";
import "./card-in-section031.css";

const CardInSection = ({ className = "" }) => {
  return (
    <div className={`card-in-section-031 ${className}`}>
      <img
        className="card-in-section-03-item"
        loading="lazy"
        alt=""
        src="/rectangle-11.svg"
      />
      <div className="ques-of-the">QUES OF THE DAY</div>
    </div>
  );
};

CardInSection.propTypes = {
  className: PropTypes.string,
};

export default CardInSection;
