import React, { useState, useEffect } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

import CircularProgress from "@mui/material/CircularProgress";

import Hero from "../../components/HeroBanner/Hero";
import SearchBar from "../../components/SearchBar/SearchBar";
import Paginate from "../../components/Pagination/Pagination";

import content from "../../assets/data/content.json";
import {
  CardsGrid,
  CharactersListSection,
  SectionTitle,
  SectionHeader,
  LoaderContainer,
} from "./ComicsStyle";
import { getAllComics, selectAllComics, selectAllComicsCount } from "../../features/Comics/ComicsSlice";
import { useGetAllComicsQuery } from "../../features/Comics/ComicsApiSlice";
import ComicCard from "../../components/ComicsCard/ComicCard";

import { Pagination } from "../../components/Pagination/IPagination";

const Comics: React.FC = () => {
  const [pagination, setPagination] = useState<Pagination>({ offset: 0, limit: 36 });
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useAppDispatch();
  const characters = useAppSelector(selectAllComics) || [];
  const charactersCount = useAppSelector(selectAllComicsCount);
  const { data, isFetching } = useGetAllComicsQuery({
    ...pagination,
    nameStartsWith: searchQuery,
  });

  useEffect(() => {
    if (data) {
      dispatch(getAllComics(data));
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
      <Hero {...content.comics} />
      <CharactersListSection>
        <SectionHeader>
          <SectionTitle>Marvel Comics List</SectionTitle>
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
                characters.map(({ thumbnail, title, creators }) => (
                  <ComicCard key={nanoid()} image={thumbnail} name={title} credit={creators} />
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

export default Comics;
