import PropTypes from "prop-types";

export default function JokeButton({ setJoke }) {
  return (
    <button
      type="button"
      className="bg-grey-500 rounded p-3 text-white"
      onClick={() => {
        fetch("https://official-joke-api.appspot.com/random_joke")
          .then((res) => res.json())
          .then((joke) => {
            if (joke) {
              setJoke(joke);
            } else {
              // Handle null or empty joke
              console.error("Received null or empty joke.");
            }
          })
          .catch((error) => {
            // Handle fetch error
            console.error("Error fetching joke:", error);
          });
      }}
    >
      Get Joke
    </button>
  );
}

JokeButton.propTypes = {
  setJoke: PropTypes.func.isRequired,
};
