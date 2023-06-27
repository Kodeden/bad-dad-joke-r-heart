import JokeButton from "./components/JokeButton";
import JokeList from "./components/JokeList";
import JokeText from "./components/JokeText";
import JokeVote from "./components/JokeVote";

function App() {
  return (
    <main className="container flex items-center">
      <section>
        <JokeButton setJoke={setJoke} />
        <JokeText joke={JokeText} />
        {JokeText && <JokeVote onClick={handleVote} />}
      </section>
      <section>
        <JokeList title="👍🏾 Jokes 😆" jokes={goodJokes} />
        <JokeList title="👎🏾 Jokes 😿" jokes={badJokes} />
      </section>
    </main>
  );
}

export default App;
