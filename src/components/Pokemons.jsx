import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  getPokemonsAction,
  getNextPokemonsAction,
  getPrevPokemonsAction,
  getPokemonAction,
} from "../redux/pokeDucks";

import PokemonDetail from "../components/PokemonDetail";
import SearchInput from "../components/SearchInput";

import {
  Container,
  BtnContainer,
  Button,
  List,
  Card,
  TransparentButton,
  MainContainer,
  SearchContainer,
} from "../components/styles";

const Pokemons = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((store) => store.pokemons.array);
  const offset = useSelector((store) => store.pokemons.offset);
  const currentPokemon = useSelector((store) => store.pokemons.object);

  useEffect(() => {
    dispatch(getPokemonsAction());
  }, [dispatch]);

  return (
    <Container>
      <BtnContainer>
        <Button
          secondary
          disabled={!offset}
          onClick={() => dispatch(getPrevPokemonsAction())}
        >
          Anterior
        </Button>
        <Button
          secondary
          disabled={!pokemons.length}
          onClick={() => dispatch(getNextPokemonsAction())}
        >
          Siguiente
        </Button>
      </BtnContainer>
      <SearchContainer>
        <SearchInput />
      </SearchContainer>
      <MainContainer>
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
      </MainContainer>
    </Container>
  );
};

export default Pokemons;
