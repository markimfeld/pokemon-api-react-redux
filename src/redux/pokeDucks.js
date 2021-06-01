import axios from "axios";
import { act } from "react-dom/test-utils";

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
      return;
    default:
      return state;
  }
}

// actions
export const getPokemonsAction = () => async (dispatch, getState) => {
  console.log(getState().pokemons);

  const offset = getState().pokemons.offset;

  try {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=5`
    );
    dispatch({
      type: GET_POKEMONS_SUCCESS,
      payload: res.data.results,
    });
  } catch (error) {}
};

export const getNextPokemonsAction = () => async (dispatch, getState) => {
  let offset = getState().pokemons.offset;

  offset++;

  try {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=5`
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
    offset--;
  }

  try {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=5`
    );
    dispatch({
      type: GET_PREV_POKEMONS_SUCCESS,
      payload: { data: res.data.results, offset: offset },
    });
  } catch (error) {}
};

export const getPokemonAction = () => async (dispatch, getState) => {
  let actualURL = getState().pokemons.actualURL;
  try {
    const res = await axios.get(actualURL);
  } catch (error) {}
};
