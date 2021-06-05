import React from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  getPokemonsAction,
  getNextPokemonsAction,
  getPrevPokemonsAction,
  getPokemonAction,
} from "../redux/pokeDucks";

import PokemonDetail from "../components/PokemonDetail";

const Pokemons = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((store) => store.pokemons.array);
  const offset = useSelector((store) => store.pokemons.offset);
  const currentPokemon = useSelector((store) => store.pokemons.object);

  const styles = {
    container: {
      backgroundColor: "#000",
      height: "100vh",
    },
    btnContainer: {
      display: "flex",
      justifyContent: "center",
      paddingTop: 10,
    },
    btn: {
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 15,
      paddingRight: 15,
      margin: 2,
      border: "none",
      backgroundColor: "#BB86FC",
      fontSize: 15,
      borderRadius: 4,
    },
    title: {
      fontSize: 30,
      textAlign: "center",
      color: "white",
      fontFamily: "sans-serif",
    },
    card: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 30,
      backgroundColor: "#1F1F1F",
      borderRadius: 6,
      color: "white",
      fontFamily: "sans-serif",
      fontSize: 20,
      margin: 10,
      listStyle: "none",
      textDecoration: "none",
    },
    list: {
      padding: 0,
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    text: {
      color: "black",
      textAlign: "center",
      fontFamily: "sans-serif",
      fontSize: 20,
      padding: 20,
      backgroundColor: "#BB86FC",
    },
    links: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textDecoration: "none",
      backgroundColor: "transparent",
      color: "white",
      padding: 0,
      margin: 0,
      cursor: "pointer",
    },
    btnTransparent: {
      backgroundColor: "transparent",
      color: "white",
      border: "none",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.btnContainer}>
        <button
          style={styles.btn}
          onClick={() => dispatch(getPokemonsAction())}
        >
          Get Pokemons
        </button>
        <button
          onClick={() => dispatch(getPrevPokemonsAction())}
          disabled={!offset}
          style={styles.btn}
        >
          Prev
        </button>
        <button
          style={styles.btn}
          disabled={!pokemons.length}
          onClick={() => dispatch(getNextPokemonsAction())}
        >
          Next
        </button>
      </div>
      {Object.entries(currentPokemon).length > 0 && <PokemonDetail />}
      <ul style={styles.list}>
        {pokemons.length > 0 &&
          pokemons.map((pokemon) => (
            <li style={styles.card} key={pokemon.name}>
              <span>{pokemon.name}</span>
              <button
                style={styles.btnTransparent}
                onClick={() => dispatch(getPokemonAction(pokemon.url))}
              >
                <i className="material-icons">visibility</i>
              </button>
            </li>
          ))}
        {pokemons.length === 0 && <li style={styles.card}>No hay pokemones</li>}
      </ul>
    </div>
  );
};

export default Pokemons;
