/**
 * PokemonSelect component:
 *   * Renders:
 *     * a select element for choosing a Pokemon by name
 *     * a button to display the card for the chosen Pokemon
 *     * a button to display a random Pokemon card
 */
import React, { useState } from "react";
import pokemonList from "./pokemonList";
import { choice } from "./helpers";

/* Select element to choose from common pokemon. */
function PokemonSelect({ add, pokemon = pokemonList }) {
  const [pokeIdx, setPokeIdx] = useState(0);
  const handleChange = evt => {
    setPokeIdx(evt.target.value);
  };

  return (
    <div>
      {/* A drop-down list of Pokemon */}
      <select onChange={handleChange}>
        {pokemon.map((p, idx) => (
          <option key={idx} value={idx}>
            {p}
          </option>
        ))}
      </select>
      {/* Button to display chosen Pokemon card */}
      <button onClick={() => add(pokemon[pokeIdx])}>Catch one!</button>
      {/* Button to display random Pokemon card */}
      <button onClick={() => add(choice(pokemon))}>I'm feeling lucky</button>
    </div>
  );
}

export default PokemonSelect;
