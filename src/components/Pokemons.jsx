import React from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  getPokemonsAction,
  getNextPokemonsAction,
  getPrevPokemonsAction,
} from "../redux/pokeDucks";

const Pokemons = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((store) => store.pokemons.array);
  const offset = useSelector((store) => store.pokemons.offset);

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
    },
    text: {
      color: "white",
      textAlign: "center",
      fontFamily: "sans-serif",
      fontSize: 17,
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
    },
    links: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textDecoration: "none",
      color: "white",
      padding: 0,
      margin: 0,
      cursor: "pointer",
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
      <p style={styles.title}>Lista de pokemones</p>
      <ul style={styles.list}>
        {pokemons.length > 0 &&
          pokemons.map((pokemon) => (
            <li style={styles.card} key={pokemon.name}>
              <span>{pokemon.name}</span>
              <a style={styles.links} href={pokemon.url}>
                <i className="material-icons">visibility</i>
              </a>
            </li>
          ))}
        {pokemons.length === 0 && <li style={styles.card}>No hay pokemones</li>}
      </ul>
      {pokemons.length > 0 && <p style={styles.text}>Pagina {offset}</p>}
    </div>
  );
};

export default Pokemons;
