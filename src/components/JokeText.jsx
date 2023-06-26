import PropTypes from "prop-types";

export default function JokeText({ joke }) {
  return (
    <section className="text-center text-3xl">
      <p className="font-bold">{joke?.setup}</p>
      <p>{joke?.punchline}</p>
    </section>
  );
}

JokeText.propTypes = {
  joke: PropTypes.shape({
    setup: PropTypes.string.isRequired,
    punchline: PropTypes.string.isRequired,
  }).isRequired,
};
