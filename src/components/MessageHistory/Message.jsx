import PropTypes from "prop-types";

const Message = ({ from, message }) => {
  const { name } = from;
  const { time, text } = message;

  return (
    <li className="clearfix">
      <div className="message-data">
        <span className="message-data-name">{name}</span>
        <span className="message-data-time">{time}</span> &nbsp; &nbsp;
        <i className="fa fa-circle me"></i>
      </div>
      <div className="message my-message">{text}</div>
    </li>
  );
};

Message.propTypes = {
  from: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  message: PropTypes.shape({
    time: PropTypes.string.isRequired,
    text: PropTypes.string,
  }).isRequired,
};

export default Message;
