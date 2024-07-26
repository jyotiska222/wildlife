import PropTypes from "prop-types";
import "./OptionBottom.css";

const OptionBottom = ({ className = "" }) => {
  return (
    <div className={`option-bottom ${className}`}>
      <div className="bottom-logo1">
        <div className="placeholders" />
        <div className="placeholders1" />
        <div className="placeholders2" />
      </div>
    </div>
  );
};

OptionBottom.propTypes = {
  className: PropTypes.string,
};

export default OptionBottom;
