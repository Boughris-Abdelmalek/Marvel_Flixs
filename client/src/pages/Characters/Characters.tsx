import React, { useState, useEffect } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  selectAllCharacters,
  getAllCharacters,
  selectAllCharactersCount,
} from "../../features/Characters/CharactersSlice";
import { useGetAllCharactersQuery } from "../../features/Characters/CharactersApiSlice";

import CircularProgress from "@mui/material/CircularProgress";

import Hero from "../../components/HeroBanner/Hero";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import Paginate from "../../components/Pagination/Pagination";

import content from "../../assets/data/content.json";
import {
  CardsGrid,
  CharactersListSection,
  SectionTitle,
  SectionHeader,
  LoaderContainer,
} from "./styles";
import { Pagination } from "../../components/Pagination/IPagination";

const Characters: React.FC = () => {
  const [pagination, setPagination] = useState<Pagination>({ offset: 0, limit: 36 });
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useAppDispatch();
  const characters = useAppSelector(selectAllCharacters) || [];
  const charactersCount = useAppSelector(selectAllCharactersCount);
  const { data, isFetching } = useGetAllCharactersQuery({
    ...pagination,
    nameStartsWith: searchQuery,
  });

  useEffect(() => {
    if (data) {
      dispatch(getAllCharacters(data));
    }
  }, [data]);

  const handlePaginationChange = (newPagination: Pagination) => {
    setPagination(newPagination);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <>
      <Hero {...content.characters} />
      <CharactersListSection>
        <SectionHeader>
          <SectionTitle>Marvel Characters List</SectionTitle>
          <SearchBar onSearch={handleSearch} />
        </SectionHeader>
        {isFetching ? (
          <LoaderContainer>
            <CircularProgress />
          </LoaderContainer>
        ) : (
          <>
            <CardsGrid>
              {characters &&
                characters.map(({ thumbnail, name, id }) => (
                  <CharacterCard key={nanoid()} image={thumbnail} name={name} redirectUrl={`/characters/${id}`} />
                ))}
            </CardsGrid>
            <Paginate
              pagination={pagination}
              charactersCount={charactersCount}
              onPageChange={handlePaginationChange}
            />
          </>
        )}
      </CharactersListSection>
    </>
  );
};

export default Characters;
