import React, { useContext, createContext } from "react";
import { useSearchParams } from "react-router-dom";

const SearchContext = createContext();
export function SearchProvider({ children }) {
  let [searchParams, setSearchParams] = useSearchParams();
  let value = { searchParams, setSearchParams };
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}

export function useSearch() {
  return useContext(SearchContext);
}
