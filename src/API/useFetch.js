import { useState, useEffect } from "react";

const useFetch = url => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCharacters() {
      setLoading(true);
      let res = await fetch(url);
      let data = await res.json();
      setCharacters(data);
      setLoading(false);
    }
    fetchCharacters();
  }, [url]);

  return { characters, loading };
};

export default useFetch;
