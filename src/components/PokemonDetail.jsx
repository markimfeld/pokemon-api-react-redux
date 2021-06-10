import React from "react";

import { useSelector } from "react-redux";

import { DetailCard, Image, Title } from "../components/styles";

const PokemonDetail = (props) => {
  const currentPokemon = useSelector((store) => store.pokemons.object);

  return (
    <DetailCard>
      <Title>{currentPokemon.name}</Title>
      <Image
        src={currentPokemon.sprites.front_default}
        alt={currentPokemon.name}
      />
    </DetailCard>
  );
};

export default PokemonDetail;
