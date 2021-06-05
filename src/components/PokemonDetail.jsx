import React from "react";

import { useSelector } from "react-redux";

const PokemonDetail = (props) => {
  const currentPokemon = useSelector((store) => store.pokemons.object);

  const styles = {
    card: {
      boxSizing: "border-box",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: 15,
      backgroundColor: "#1F1F1F",
      borderRadius: 6,
      color: "white",
      fontFamily: "sans-serif",
      fontSize: 20,
      margin: 10,
      listStyle: "none",
      textDecoration: "none",
    },
    title: {
      fontSize: 30,
      textAlign: "center",
      textTransform: "uppercase",
      color: "white",
      fontFamily: "sans-serif",
    },
    img: {
      height: 100,
      width: 100,
    },
  };

  return (
    <div style={styles.card}>
      <img
        style={styles.img}
        src={currentPokemon.sprites.back_default}
        alt={currentPokemon.name}
      />
      <h1 style={styles.title}>{currentPokemon.name}</h1>
    </div>
  );
};

export default PokemonDetail;
