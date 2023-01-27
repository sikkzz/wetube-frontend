import React from "react";
import "./Search.scss";
import SearchHeader from "./SearchHeader";
import SearchContent from "./SearchContent";

const Search = () => {
  return (
    <wtd-search>
      <div id="container" className="wtd-search">
        <wtd-search-list-render>
          <SearchHeader />
          <SearchContent />
        </wtd-search-list-render>
      </div>
    </wtd-search>
  );
};

export default Search;
