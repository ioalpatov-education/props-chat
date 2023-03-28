import Message from "./Message";
import Response from "./Response";
import Typing from "./Typing";

import PropTypes from "prop-types";

const MessageHistory = ({ list }) => {
  const messages = list.map((el) => {
    const message = {
      time: el.time,
      text: el.text,
    };

    const components = {
      message: <Message key={el.id} from={el.from} message={message} />,
      response: <Response key={el.id} from={el.from} message={message} />,
      typing: <Typing key={el.id} from={el.from} message={message} />,
    };

    return components[el.type];
  });

  const chat = !!list.length ? <ul className="chat-ul">{messages}</ul> : null;
  return <>{chat}</>;
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
      text: PropTypes.string,
    }).isRequired
  ),
};

MessageHistory.defaultProps = {
  list: [],
};

export default MessageHistory;
