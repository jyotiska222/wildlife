import PropTypes from "prop-types";
import "./Sectionn2.css";

const Sectionn = ({ className = "" }) => {
  return (
    <div className={`sectionn-2 ${className}`}>
      <div className="sectionn-2-child" />
    </div>
  );
};

Sectionn.propTypes = {
  className: PropTypes.string,
};

export default Sectionn;
