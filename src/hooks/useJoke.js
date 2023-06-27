import { useState } from "react";

export default function useJoke() {
  const [joke, setJoke] = useState(null);
  const [goodJokes, setGoodJokes] = useState([]);
  const [badJokes, setBadJokes] = useState([]);

  const handleVote = (event) => {
    if (event.target.value === "👍🏾") {
      setGoodJokes([...goodJokes, joke]);
    } else {
      setBadJokes([...badJokes, joke]);
    }
    setJoke(null);
  };

  return { joke, setJoke, goodJokes, badJokes, handleVote };
}
