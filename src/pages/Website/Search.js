import React from "react";
import styled from "styled-components";
import Dashboard from "../../layouts/Dashboard";
import Field from "../../components/Field";

const Heading = styled.h1`
  background: linear-gradient(180deg, #e25353 0%, #831e1e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Categories = styled.ul``;

const Category = styled.li``;

const SearchBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SearchBar = () => {
  return (
    <div>
      <div>
        <Field type="search" />
      </div>
      <div>
        Search
        <Categories>
          <Category>Movies</Category>
          <Category>Movies</Category>
          <Category>Movies</Category>
          <Category>Movies</Category>
        </Categories>
      </div>
    </div>
  );
};

const SearchBox = () => {
  return (
    <SearchBoxContainer>
      <Heading>The Torrent Company</Heading>
      <SearchBar></SearchBar>
    </SearchBoxContainer>
  );
};

const MoviesShowcase = () => {
  return <div></div>;
};

const Movie = () => {
  return <div></div>;
};

const Highlights = () => {
  return (
    <div>
      <MoviesShowcase>
        <Movie />
        <Movie />
        <Movie />
        <Movie />
      </MoviesShowcase>
    </div>
  );
};

function Search() {
  return (
    <Dashboard>
      <SearchBox />
      <Highlights />
    </Dashboard>
  );
}

export default Search;
