import PropTypes from "prop-types";
import "./ResisterBottom.css";

const ResisterBottom = ({ className = "" }) => {
  return (
    <img
      className={`resister-bottom-icon1 ${className}`}
      loading="lazy"
      alt=""
      src="/resister-bottom@2x.png"
    />
  );
};

ResisterBottom.propTypes = {
  className: PropTypes.string,
};

export default ResisterBottom;
