import PropTypes from "prop-types";
import "./BottomInsideArticleBox.css";

const BottomInsideArticleBox = ({ className = "" }) => {
  return (
    <button className={`bottom-inside-article-box ${className}`}>
      <div className="background2" />
      <div className="know-more">Know More</div>
    </button>
  );
};

BottomInsideArticleBox.propTypes = {
  className: PropTypes.string,
};

export default BottomInsideArticleBox;
