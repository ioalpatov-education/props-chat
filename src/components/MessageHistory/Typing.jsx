import PropTypes from "prop-types";

const Typing = ({ from, message }) => {
  const { name } = from;
  const { time, text } = message;
  return (
    <li className="clearfix">
      <div className="message-data">
        <span className="message-data-name">{name}</span>
        <span className="message-data-time">{time}</span> &nbsp; &nbsp;
        <i className="fa fa-circle me"></i>
      </div>
      <div className="typing">
        <div className="typing__dot"></div>
        <div className="typing__dot"></div>
        <div className="typing__dot"></div>
      </div>
    </li>
  );
};

Typing.propTypes = {
  from: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  message: PropTypes.shape({
    time: PropTypes.string.isRequired,
    text: PropTypes.string,
  }).isRequired,
};

export default Typing;
