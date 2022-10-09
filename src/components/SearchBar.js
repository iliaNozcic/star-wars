import React from "react";
import { useState } from "react";
import App from "../App";

function SearchBar({ setCharacters, placeholder, characters }) {
  const handleChange = event => {
    const searchWord = event.target.value;

    if (searchWord === "") {
      setCharacters(characters);
    } else {
      setCharacters(() =>
        characters.filter(item =>
          item.name.toLowerCase().includes(searchWord.toLowerCase())
        )
      );
    }
  };

  return (
    <div className="input">
      <input
        className="input-text"
        type="text"
        onChange={handleChange}
        placeholder="Enter a character name..."
      />
    </div>
  );
}

export default SearchBar;
