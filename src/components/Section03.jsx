import PropTypes from "prop-types";
import "./Section03.css";

const Section1 = ({ className = "" }) => {
  return (
    <div className={`section03 ${className}`}>
      <div className="background1" />
      <h3 className="know-about-biodiverbiodiversit">{`KNOW ABOUT BIODIVERBIODIVERSITY & WILDLIFE `}</h3>
    </div>
  );
};

Section1.propTypes = {
  className: PropTypes.string,
};

export default Section1;
