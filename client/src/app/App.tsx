import React, { useEffect, useState } from "react";

import { getAllCharacters, selectAllCharacters } from "../features/Characters/CharactersSlice";
import { useAppDispatch, useAppSelector } from "./hooks";
import { useGetAllCharactersQuery } from "../features/Characters/CharactersApiSlice";
import { nanoid } from "@reduxjs/toolkit";

const App = () => {
  const [pagination, setPagination] = useState({ offset: 0, limit: 20 });

  const dispatch = useAppDispatch();
  const characters = useAppSelector(selectAllCharacters);
  const { data, isLoading } = useGetAllCharactersQuery(pagination); // add the typing

  useEffect(() => {
    dispatch(getAllCharacters(data));
  }, [data]);

  const handleNextPage = () => {
    setPagination((prevPagination) => ({
      offset: prevPagination.offset + prevPagination.limit,
      limit: prevPagination.limit,
    }));
  };

  const handlePreviousPage = () => {
    setPagination((prevPagination) => ({
      offset: prevPagination.offset - prevPagination.limit,
      limit: prevPagination.limit,
    }));
  };

  console.log(characters);

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <ul>
          {characters &&
            characters.map((chars) => {
              return <li key={nanoid()}>{chars.name}</li>;
            })}
        </ul>
      )}
      <button onClick={handlePreviousPage}>previous 20</button>
      <button onClick={handleNextPage}>next 20</button>
    </>
  );
};

export default App;
