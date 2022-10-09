import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Characters from "../components/Characters";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";

function Home() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [startCharacters, setStartCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async currentPage => {
      setLoading(true);
      const res = await axios.get(
        `https://swapi.dev/api/people/?page=${currentPage}`
      );
      setCharacters(res.data.results);
      setStartCharacters(res.data.results);
      setLoading(false);
      console.log(res.data);
    };

    fetchCharacters(currentPage);
  }, [currentPage]);

  return (
    <div>
      <h1 className="h1">STAR WARS</h1>
      <SearchBar
        characters={startCharacters}
        setCharacters={setCharacters}
        placeholder="Enter a character name..."
      />
      <Characters characters={characters} loading={loading} />
      <Pagination setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default Home;
