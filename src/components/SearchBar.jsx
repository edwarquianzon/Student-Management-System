import React from "react";

const SearchBar = ({ query, setQuery }) => {
  return (
    <div>
      Search:
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
