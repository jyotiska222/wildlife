import PropTypes from "prop-types";
import "./BottomInsideQuiesBox.css";

const BottomInsideQuiesBox = ({ className = "" }) => {
  return (
    <div className={`bottom-inside-quies-box ${className}`}>
      <div className="elements">
        <div className="placeholders3" />
        <div className="placeholders4" />
      </div>
      <div className="answer-earn">{`Answer & Earn points`}</div>
    </div>
  );
};

BottomInsideQuiesBox.propTypes = {
  className: PropTypes.string,
};

export default BottomInsideQuiesBox;
