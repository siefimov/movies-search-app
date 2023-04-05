import React from 'react';

const SearchContext = React.createContext({
  query: '',
  setquery: () => {},
});

export default SearchContext;
