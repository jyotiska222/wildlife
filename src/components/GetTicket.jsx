import PropTypes from "prop-types";
import "./GetTicket.css";

const GetTicket = ({ className = "" }) => {
  return (
    <div className={`get-ticket ${className}`}>
      <div className="button" />
      <a className="get-ticket1">Get Ticket</a>
    </div>
  );
};

GetTicket.propTypes = {
  className: PropTypes.string,
};

export default GetTicket;
