import PropTypes from "prop-types";
import "./HomePage.css";

const HomePage = ({ className = "" }) => {
  return <div className={`home-page ${className}`} />;
};

HomePage.propTypes = {
  className: PropTypes.string,
};

export default HomePage;
