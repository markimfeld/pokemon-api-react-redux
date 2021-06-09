import React, { useState } from "react";

import { useDispatch } from "react-redux";

import { setPokemonsAction } from "../redux/pokeDucks";

const SearchInput = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("");

  console.log(filter);

  return (
    <div>
      <label htmlFor="pokemon">Buscar por nombre</label>
      <input
        onChange={(e) => {
          setFilter(e.target.value);
          dispatch(setPokemonsAction(filter));
        }}
        value={filter}
        type="text"
        name="pokemon"
        id="pokemon"
      />
    </div>
  );
};

export default SearchInput;
