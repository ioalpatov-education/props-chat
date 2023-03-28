import PropTypes from "prop-types";

const MessageHistory = ({ list }) => {
  const { id, from, type, time, text } = list;

  const messages = !!list.length ? <ul></ul> : null;
  return <>{messages}</>;
};

MessageHistory.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      from: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
      type: PropTypes.oneOf(["response", "message", "typing"]),
      time: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ),
};

MessageHistory.defaultProps = {
  list: [],
};

export default MessageHistory;
