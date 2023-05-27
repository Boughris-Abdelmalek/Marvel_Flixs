import React, { useState, useEffect } from "react";
import Hero from "../../components/HeroBanner/Hero";
import content from "../../assets/data/content.json";

import {
  CharactersListSection,
  SectionHeader,
  SectionTitle,
  LoaderContainer,
  CardsGrid,
} from "./styles";

import SearchBar from "../../components/SearchBar/SearchBar";

import { Pagination } from "../../components/Pagination/IPagination";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

import { CircularProgress } from "@mui/material";
import Paginate from "../../components/Pagination/Pagination";
import ComicCard from "../../components/ComicsCard/ComicCard";
import { nanoid } from "@reduxjs/toolkit";
import { getAllSeries, selectAllSeries, selectAllSeriesCount } from "../../features/Series/SeriesSlice";
import { useGetAllSeriesQuery } from "../../features/Series/SeriesApiSlice";

const Series: React.FC = () => {
  const [pagination, setPagination] = useState<Pagination>({ offset: 0, limit: 36 });
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useAppDispatch();
  const series = useAppSelector(selectAllSeries) || [];
  const seriesCount = useAppSelector(selectAllSeriesCount);
  const { data, isFetching } = useGetAllSeriesQuery({
    ...pagination,
    nameStartsWith: searchQuery,
  });

  useEffect(() => {
    if (data) {
      dispatch(getAllSeries(data));
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
      <Hero {...content.series} />
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
              {series &&
                series.map((serie) => (
                  <ComicCard key={nanoid()} comic={serie} redirectUrl={`/series/${serie.id}`} />
                ))}
            </CardsGrid>
            <Paginate
              pagination={pagination}
              charactersCount={seriesCount}
              onPageChange={handlePaginationChange}
            />
          </>
        )}
      </CharactersListSection>
    </>
  );
};

export default Series;
