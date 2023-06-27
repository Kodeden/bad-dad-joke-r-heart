import PropTypes from "prop-types";

export default function JokeList({ title, jokes }) {
  return (
    <section className="text-center">
      <h2 className="text-2xl font-bold">{title}</h2>
      <ul className="divide-y">
        {jokes.map((joke) => (
          <li key={joke.id} className="p-4">
            <p className="font-bold">{joke.setup}</p>
            <p>{joke.punchline}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

JokeList.propTypes = {
  title: PropTypes.string.isRequired,
  jokes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      setup: PropTypes.string.isRequired,
      punchline: PropTypes.string.isRequired,
    })
  ).isRequired,
};
