import React from "react";
import { Link } from "react-router-dom";
const Characters = ({ characters, loading }) => {
  if (loading) {
    return <h2>loading...</h2>;
  }

  console.log("characters", characters);
  return (
    <div className="character-container">
      {characters &&
        characters.map(character => (
          <div key={character.id} className="character-item">
            <Link to={`/${character.url.match(/(\d+)/)[0]}`}>
              <h1> Name:{character.name}</h1>
              <p> height:{character.height}</p>
              <p> mass:{character.mass}</p>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Characters;
