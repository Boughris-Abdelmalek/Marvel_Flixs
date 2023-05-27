import React, { useState, useEffect } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

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
} from "./CreatorsStyles";
import { Pagination } from "../../components/Pagination/IPagination";
import { getAllCreators, selectAllCreators, selectAllCreatorsCount } from "../../features/Creators/CreatorsSlice";
import { useGetAllCreatorsQuery } from "../../features/Creators/CreatorsAPiSlice";

const Creators: React.FC = () => {
  const [pagination, setPagination] = useState<Pagination>({ offset: 0, limit: 36 });
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useAppDispatch();
  const creators = useAppSelector(selectAllCreators) || [];
  const creatorsCount = useAppSelector(selectAllCreatorsCount);
  const { data, isFetching } = useGetAllCreatorsQuery({
    ...pagination,
    nameStartsWith: searchQuery,
  });

  useEffect(() => {
    if (data) {
      dispatch(getAllCreators(data));
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
      <Hero {...content.creators} />
      <CharactersListSection>
        <SectionHeader>
          <SectionTitle>Marvel Creators List</SectionTitle>
          <SearchBar onSearch={handleSearch} />
        </SectionHeader>
        {isFetching ? (
          <LoaderContainer>
            <CircularProgress />
          </LoaderContainer>
        ) : (
          <>
            <CardsGrid>
              {creators &&
                creators.map(({ thumbnail, name, id }) => (
                  <CharacterCard key={nanoid()} image={thumbnail} name={name} redirectUrl={`/creators/${id}`} />
                ))}
            </CardsGrid>
            <Paginate
              pagination={pagination}
              charactersCount={creatorsCount}
              onPageChange={handlePaginationChange}
            />
          </>
        )}
      </CharactersListSection>
    </>
  );
};

export default Creators;
