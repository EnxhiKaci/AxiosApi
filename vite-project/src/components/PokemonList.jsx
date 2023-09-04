import React, { useState, useEffect } from "react";
import axios from "axios";

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPokemonNames = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=807"
      );
      const pokemonData = response.data.results;
      setPokemonList(pokemonData);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching Pokémon:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Fetch Pokémon names
    fetchPokemonNames();
  }, []);

  return (
    <div>
      <h1>Pokémon Names</h1>
      <button onClick={fetchPokemonNames} disabled={isLoading}>
        {isLoading ? "Fetching..." : "Fetch Pokémon Names"}
      </button>

      <ul>
        {pokemonList.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;

