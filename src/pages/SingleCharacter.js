import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../API/useFetch";

const SingleCharacter = props => {
  const { id } = useParams();
  console.log(id);
  const { characters, loading } = useFetch(
    `https://swapi.dev/api/people/${id}`
  );

  if (loading) {
    return <h3>Loading...</h3>;
  } else
    return (
      <div>
        <h1 className="char-name">{characters?.name}</h1>
        <p className="char-info">
          Gender: {characters?.gender}
          <br />
          Skin Color: {characters?.skin_color}
          <br />
          Birth year: {characters?.birth_year}
          <br />
          Height: {characters?.height}
          <br />
          Eye Color: {characters?.eye_color}
          <br />
          Mass: {characters?.mass}
        </p>
      </div>
    );
};

export default SingleCharacter;
