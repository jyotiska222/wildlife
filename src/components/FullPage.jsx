import HomePage from "/";
import PropTypes from "prop-types";
import "./FullPage.css";

const FullPage = ({ className = "" }) => {
  return (
    <div className={`full-page1 ${className}`}>
      <HomePage />
    </div>
  );
};

FullPage.propTypes = {
  className: PropTypes.string,
};

export default FullPage;
