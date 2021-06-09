import axios from "axios";

// constants
const initialState = {
  array: [],
  offset: 0,
  object: {},
  actualURL: "",
};

const GET_POKEMONS_SUCCESS = "GET_POKEMONS_SUCCESS";
const GET_NEXT_POKEMONS_SUCCESS = "GET_NEXT_POKEMONS_SUCCESS";
const GET_PREV_POKEMONS_SUCCESS = "GET_PREV_POKEMONS_SUCCESS";
const GET_POKEMON_SUCCESS = "GET_POKEMON_SUCCESS";
const SET_POKEMONS_SUCCESS = "SET_POKEMONS_SUCCESS";

// reducers
export default function pokeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONS_SUCCESS:
      return { ...state, array: action.payload };
    case GET_NEXT_POKEMONS_SUCCESS:
      return {
        ...state,
        array: action.payload.data,
        offset: action.payload.offset,
      };
    case GET_PREV_POKEMONS_SUCCESS:
      return {
        ...state,
        array: action.payload.data,
        offset: action.payload.offset,
      };
    case GET_POKEMON_SUCCESS:
      return {
        ...state,
        object: action.payload.data,
        actualURL: action.payload.actualURL,
      };
    case SET_POKEMONS_SUCCESS:
      return {
        ...state,
        array: action.payload.data,
      };
    default:
      return state;
  }
}

// actions
export const getPokemonsAction = () => async (dispatch, getState) => {
  const offset = getState().pokemons.offset;

  try {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`
    );
    dispatch({
      type: GET_POKEMONS_SUCCESS,
      payload: res.data.results,
    });
  } catch (error) {}
};

export const getNextPokemonsAction = () => async (dispatch, getState) => {
  let offset = getState().pokemons.offset;

  offset += 20;

  try {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`
    );
    dispatch({
      type: GET_NEXT_POKEMONS_SUCCESS,
      payload: { data: res.data.results, offset: offset },
    });
  } catch (error) {}
};

export const getPrevPokemonsAction = () => async (dispatch, getState) => {
  let offset = getState().pokemons.offset;

  if (offset > 0) {
    offset -= 20;
  }

  try {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`
    );
    dispatch({
      type: GET_PREV_POKEMONS_SUCCESS,
      payload: { data: res.data.results, offset: offset },
    });
  } catch (error) {}
};

export const getPokemonAction = (url) => async (dispatch, getState) => {
  try {
    const res = await axios.get(url);
    dispatch({
      type: GET_POKEMON_SUCCESS,
      payload: {
        data: res.data,
        actualURL: url,
      },
    });
  } catch (error) {
    console.error(error);
  }
};

export const setPokemonsAction = (filter) => async (dispatch, getState) => {
  const pokemons = getState().pokemons.array;

  const pokemonsFiltered = pokemons.filter((pokemon) =>
    pokemon.name.includes(filter)
  );

  if (pokemonsFiltered.length > 0) {
    dispatch({
      type: SET_POKEMONS_SUCCESS,
      payload: {
        data: pokemonsFiltered,
      },
    });
  } else {
    dispatch({
      type: SET_POKEMONS_SUCCESS,
      payload: {
        data: pokemons,
      },
    });
  }
};
