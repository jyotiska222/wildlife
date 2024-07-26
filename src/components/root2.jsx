import Section2 from "./Section1";
import PropTypes from "prop-types";
import "./root2.css";

const Root2 = ({ className = "" }) => {
  return (
    <section className={`root1 ${className}`}>
      <Section2 />
    </section>
  );
};

Root2.propTypes = {
  className: PropTypes.string,
};

export default Root2;
