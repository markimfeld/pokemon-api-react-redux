import React from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  getPokemonsAction,
  getNextPokemonsAction,
  getPrevPokemonsAction,
  getPokemonAction,
} from "../redux/pokeDucks";

import PokemonDetail from "../components/PokemonDetail";
import styled from "styled-components";

const Card = styled.li`
  -webkit-box-shadow: 0px 0px 4px 2px rgba(255, 255, 255, 0.1);
  box-shadow: 0px 0px 5px 0px rgba(255, 255, 255, 0.3);
  display: flex;
  flex: 1 1 200px;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  background-color: #1f1f1f;
  border-radius: 6px;
  color: white;
  font-family: sans-serif;
  font-size: 20px;
  margin: 10px;
  list-style: none;
  text-decoration: none;
`;

const Container = styled.div`
  background-color: #000;
  height: 100vh;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10px;
`;

const Button = styled.button`
  background-color: ${(props) => (props.primary ? "#bb86fc" : "#03DAC5")};
  padding: 10px 15px;
  margin: 2px;
  border: none;
  font-size: 15px;
  border-radius: 4px;
`;

const List = styled.ul`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const TransparentButton = styled.button`
  background-color: transparent;
  color: white;
  border: none;
`;

const Pokemons = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((store) => store.pokemons.array);
  const offset = useSelector((store) => store.pokemons.offset);
  const currentPokemon = useSelector((store) => store.pokemons.object);

  return (
    <Container>
      <BtnContainer>
        <Button primary onClick={() => dispatch(getPokemonsAction())}>
          Get Pokemons
        </Button>
        <Button
          secondary
          disabled={!offset}
          onClick={() => dispatch(getPrevPokemonsAction())}
        >
          Prev
        </Button>
        <Button
          secondary
          disabled={!pokemons.length}
          onClick={() => dispatch(getNextPokemonsAction())}
        >
          Next
        </Button>
      </BtnContainer>
      {Object.entries(currentPokemon).length > 0 && <PokemonDetail />}
      <List>
        {pokemons.length > 0 &&
          pokemons.map((pokemon) => (
            <Card key={pokemon.name}>
              <span>{pokemon.name}</span>
              <TransparentButton
                onClick={() => dispatch(getPokemonAction(pokemon.url))}
              >
                <i className="material-icons">visibility</i>
              </TransparentButton>
            </Card>
          ))}
        {pokemons.length === 0 && <Card>No hay pokemones</Card>}
      </List>
    </Container>
  );
};

export default Pokemons;
