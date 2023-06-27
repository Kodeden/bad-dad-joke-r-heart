import PropTypes from "prop-types";

export default function JokeVote({ onClick }) {
  <div className="flex justify-center">
    <button onClick={onClick}>👎🏾</button>
    <button onClick={onClick}>👍🏾</button>
  </div>;
}

JokeVote.propTypes = {
  onClick: PropTypes.func.isRequired,
};
