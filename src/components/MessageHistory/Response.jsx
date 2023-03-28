import PropTypes from "prop-types";

const Response = ({ from, message }) => {
  const { name } = from;
  const { time, text } = message;
  
  return (
    <li className="clearfix">
      <div className="message-data align-right">
        <span className="message-data-time">{time}</span> &nbsp; &nbsp;
        <span className="message-data-name">{name}</span>
        <i className="fa fa-circle me"></i>
      </div>
      <div className="message other-message float-right">{text}</div>
    </li>
  );
};

Response.propTypes = {
  from: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  message: PropTypes.shape({
    time: PropTypes.string.isRequired,
    text: PropTypes.string,
  }).isRequired,
};

export default Response;
