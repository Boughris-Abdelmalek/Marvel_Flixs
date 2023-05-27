import React, { useState, useEffect } from "react";

import content from "../../assets/data/content.json";

import {
  CharactersListSection,
  SectionHeader,
  SectionTitle,
  LoaderContainer,
  CardsGrid,
} from "./styles";

import SearchBar from "../../components/SearchBar/SearchBar";

import Hero from "../../components/HeroBanner/Hero";
import { Pagination } from "../../components/Pagination/IPagination";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  getAllEvents,
  selectAllEvents,
  selectAllEventsCount,
} from "../../features/Events/EventsSlice";
import { useGetAllEventsQuery } from "../../features/Events/EventsApiSlice";
import { CircularProgress } from "@mui/material";
import Paginate from "../../components/Pagination/Pagination";
import ComicCard from "../../components/ComicsCard/ComicCard";
import { nanoid } from "@reduxjs/toolkit";

const Events: React.FC = () => {
  const [pagination, setPagination] = useState<Pagination>({ offset: 0, limit: 36 });
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useAppDispatch();
  const events = useAppSelector(selectAllEvents) || [];
  const eventsCount = useAppSelector(selectAllEventsCount);
  const { data, isFetching } = useGetAllEventsQuery({
    ...pagination,
    nameStartsWith: searchQuery,
  });

  useEffect(() => {
    if (data) {
      dispatch(getAllEvents(data));
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
      <Hero {...content.events} />
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
              {events &&
                events.map((event) => (
                  <ComicCard key={nanoid()} comic={event} redirectUrl={`/events/${event.id}`} />
                ))}
            </CardsGrid>
            <Paginate
              pagination={pagination}
              charactersCount={eventsCount}
              onPageChange={handlePaginationChange}
            />
          </>
        )}
      </CharactersListSection>
    </>
  );
};

export default Events;
