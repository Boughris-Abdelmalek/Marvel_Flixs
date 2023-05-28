import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

import CircularProgress from "@mui/material/CircularProgress";

import Hero from "../../components/HeroBanner/Hero";
import SearchBar from "../../components/SearchBar/SearchBar";
import Paginate from "../../components/Pagination/Pagination";

import content from "../../assets/data/content.json";
import {
  CharactersListSection,
  SectionTitle,
  SectionHeader,
  LoaderContainer,
} from "./styles";
import { Pagination } from "../../components/Pagination/IPagination";
import {
  getAllCreators,
  selectAllCreators,
  selectAllCreatorsCount,
} from "../../features/Creators/CreatorsSlice";
import { useGetAllCreatorsQuery } from "../../features/Creators/CreatorsAPiSlice";
import CardList from "../../components/Card/CardList";

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
            <CardList items={creators} redirectUrl="/creators" />
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
