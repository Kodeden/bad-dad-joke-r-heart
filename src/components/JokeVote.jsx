import PropTypes from "prop-types";

export default function JokeVote({ onClick }) {
  return (
    <div className="my-5 flex justify-center gap-x-5">
      <button className="text-2xl" onClick={onClick}>
        👍🏾
      </button>
      <button className="text-2xl" onClick={onClick}>
        👎🏾
      </button>
    </div>
  );
}

JokeVote.propTypes = {
  onClick: PropTypes.func.isRequired,
};
