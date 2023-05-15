import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

import { SearchBarContainer, SearchInput } from "./SearchBarStyles";

type SearchBarProps = {
  onSearch: (query: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(event.target.value);
    };
  
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        onSearch(query);
      }
    };

  return (
    <SearchBarContainer>
      <SearchIcon sx={{ position: "absolute", top: "8px" }} />
      <SearchInput type="text" placeholder="SEARCH" onChange={handleInputChange} onKeyDown={handleKeyDown} />
    </SearchBarContainer>
  );
};

export default SearchBar;
