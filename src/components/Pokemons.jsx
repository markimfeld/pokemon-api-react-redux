import React from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  getPokemonsAction,
  getNextPokemonsAction,
  getPrevPokemonsAction,
  getPokemonAction,
} from "../redux/pokeDucks";

import PokemonDetail from "../components/PokemonDetail";

import {
  Container,
  BtnContainer,
  Button,
  List,
  Card,
  TransparentButton,
} from "../components/styles";

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
