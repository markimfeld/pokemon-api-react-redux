import React, { useState, useEffect } from "react";

import { useDispatch } from "react-redux";

import { setPokemonsAction } from "../redux/pokeDucks";

import { FormControl, Label, Input } from "../components/styles";

const SearchInput = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("");

  useEffect(() => {
    dispatch(setPokemonsAction(filter));
  }, [dispatch, filter]);

  return (
    <FormControl>
      <Label htmlFor="pokemon">Buscar por nombre</Label>
      <Input
        onChange={(e) => {
          setFilter(e.target.value);
        }}
        value={filter}
        type="text"
        name="pokemon"
        id="pokemon"
      />
    </FormControl>
  );
};

export default SearchInput;
