import PropTypes from "prop-types";
import "./Section1.css";

const Section2 = ({ className = "" }) => {
  return (
    <div className={`section-1 ${className}`}>
      <div className="section-1-child" />
      <img
        className="s20-s1470160x20308530-gr5-1-icon"
        loading="lazy"
        alt=""
        src="/1s20s1470160x20308530gr5-1@2x.png"
      />
      <div className="description">
        <div className="the-ministry-of">
          The Ministry of Tourism (MOT) of India oversees the promotion and
          development of wildlife sanctuaries. Its website provides
          comprehensive information on various sanctuaries across the country,
          detailing their unique flora and fauna, visitor guidelines, and
          conservation efforts. This resource aids tourists in planning
          eco-friendly and educational trips.
        </div>
      </div>
    </div>
  );
};

Section2.propTypes = {
  className: PropTypes.string,
};

export default Section2;
