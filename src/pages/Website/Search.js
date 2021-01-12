import React from "react";
import styled from "styled-components";
import Dashboard from "../../layouts/Dashboard";
import Field from "../../components/Field";
import {Movie,MovieContainer,MovieGradient} from "../../components/Movies.js";
import {FinalSearchNavbar} from "../../components/SearchNavbar.js";

const Heading = styled.h1`
 background-color: #00CFAA;
  font-family: Vidaloka;
font-style: normal;
font-weight: normal;
font-size: 72px;
line-height: 87px;
text-align: center;
margin: 0px 0px 10px 0px;
padding :0px ;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Categories = styled.ul`
margin-left:auto;
margin-right: auto;
display: inline-block;

`;

const Category = styled.li`
display: inline-block;
margin: 0px 30px;
color: #FFFFFF;
margin: 2px 10px;
`;

const SearchBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top:50px;
`;

const SearchDesign = styled.h3`
display: inline-block;
color: #FFFFFF;


`;


const SearchBar = () => {
  return (
    <div>
      <div>
        <Field type="search" />
      </div>
      <div>
        <SearchDesign>Search</SearchDesign>
        <Categories>
          <Category >Movies</Category>
          <Category>TV Shows</Category>
          <Category>Music</Category>
          <Category>Games</Category>
          <Category>Downloads</Category>
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



function Search() {
  return (
   <div>
     <FinalSearchNavbar/>
      <SearchBox />
     <MovieContainer> 
      <Movie image="p1"> <MovieGradient/></Movie>
      <Movie image="p2"> <MovieGradient/></Movie>
      <Movie image="p3"> <MovieGradient/></Movie>
      <Movie image="p4"> <MovieGradient/></Movie>
      <Movie image="p5"> <MovieGradient/></Movie>
     
     </MovieContainer>
    </div>
  );
}

export default Search;
