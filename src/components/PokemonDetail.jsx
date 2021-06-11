import React from "react";

import { useSelector } from "react-redux";

import {
  DetailCard,
  Image,
  Title,
  Avatar,
  Separator,
} from "../components/styles";

const PokemonDetail = (props) => {
  const currentPokemon = useSelector((store) => store.pokemons.object);

  return (
    <DetailCard>
      <Image
        src={currentPokemon.sprites.other.dream_world.front_default}
        alt={currentPokemon.name}
      />
      <Title>
        {currentPokemon.name}{" "}
        <span style={{ fontSize: 14, textTransform: "lowercase" }}>
          {currentPokemon.stats[0].base_stat} hp
        </span>
      </Title>
      <p>{currentPokemon.base_experience} exp</p>
      <Separator />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: 10,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ fontWeight: "bold", fontSize: 14, color: "#bb86fc" }}>
            {currentPokemon.stats[1].base_stat}K
          </span>
          <span style={{ fontSize: 15 }}>Ataque</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: 10,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ fontWeight: "bold", fontSize: 14, color: "#bb86fc" }}>
            {currentPokemon.stats[3].base_stat}K
          </span>
          <span style={{ fontSize: 15 }}>Ataque Especial</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: 20,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ fontWeight: "bold", fontSize: 14, color: "#bb86fc" }}>
            {currentPokemon.stats[2].base_stat}K
          </span>
          <span style={{ fontSize: 15 }}>Defensa</span>
        </div>
      </div>
    </DetailCard>
  );
};

export default PokemonDetail;
