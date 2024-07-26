import GetTicket from "./GetTicket";
import PropTypes from "prop-types";
import "./root1.css";

const Root1 = ({ className = "" }) => {
  return (
    <div className={`get-ticket-wrapper ${className}`}>
      <GetTicket />
    </div>
  );
};

Root1.propTypes = {
  className: PropTypes.string,
};

export default Root1;
