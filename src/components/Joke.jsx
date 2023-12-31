import PropTypes from "prop-types";

export default function Joke({ joke }) {
  return (
    <section className="text-center text-xl">
      <p className="font-bold">{joke?.setup}</p>
      <p>{joke?.punchline}</p>
    </section>
  );
}

Joke.propTypes = {
  joke: PropTypes.shape({
    setup: PropTypes.string,
    punchline: PropTypes.string,
  }),
};
