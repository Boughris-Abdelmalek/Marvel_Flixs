import { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";

const Search = (): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };
  return (
    <div>
      <SearchBar onSearch={handleSearch} />
    </div>
  );
};

export default Search;
