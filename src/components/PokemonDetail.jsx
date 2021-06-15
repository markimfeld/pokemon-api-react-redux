import React from "react";

import { useSelector } from "react-redux";

import {
  DetailCard,
  Image,
  Title,
  Separator,
  Row,
  Col,
  Stats,
  ActionType,
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
      <Row>
        <Col>
          <Stats>{currentPokemon.stats[1].base_stat}K</Stats>
          <ActionType>Ataque</ActionType>
        </Col>
        <Col>
          <Stats>{currentPokemon.stats[3].base_stat}K</Stats>
          <ActionType>Ataque Especial</ActionType>
        </Col>
        <Col>
          <Stats>{currentPokemon.stats[2].base_stat}K</Stats>
          <ActionType>Defensa</ActionType>
        </Col>
      </Row>
    </DetailCard>
  );
};

export default PokemonDetail;
