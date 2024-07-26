import PropTypes from "prop-types";
import "./BottomToJoinUs.css";

const BottomToJoinUs = ({ className = "" }) => {
  return (
    <button className={`bottom-to-join-us ${className}`}>
      <div className="background" />
      <div className="join-us">Join Us</div>
    </button>
  );
};

BottomToJoinUs.propTypes = {
  className: PropTypes.string,
};

export default BottomToJoinUs;
