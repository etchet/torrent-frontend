import React from "react";
import styled from "styled-components";
import Field from "./Field.js";

export const RegisterLogo = styled.div`
background-image:url('TorrentCompanyLogo.png');
width: 66px;
height: 72px;
background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: inline-block;
`;

export const RegisterHeading = styled.h1`
font-family: Vidaloka;
font-style: normal;
font-weight: normal;
font-size: 48px;
line-height: 58px;
text-align: center;
color: #00CFAA;
margin:0px;
padding: 0px;
display: inline-block;
position : relative;
bottom: 18px;
left:5px;

`;

export const RegisterSearchBarDesign = styled.div`

display :inline-block;
float: right;
position : relative;
top: 10px;
right:5px;

`;
const Categories = styled.ul`
margin-left:0px;

display: inline-block;

`;

const Category = styled.li`
display: inline-block;

float:left;
color: #FFFFFF;
margin: 0px 12px 0px 0px;
`;


export const RegisterSearchBar = () => {
return(<div>
<Field type="search" />
<Categories>
    <Category><input type="checkbox"/> Movies</Category>
    <Category><input type="checkbox"/> TV Shows</Category>
    <Category><input type="checkbox"/> Music</Category>
    <Category><input type="checkbox"/> Games</Category>
    <Category><input type="checkbox"/> Downloads</Category>
</Categories>

</div>);

};


export const FinalRegisterNav = () =>{
return(
<div>
<RegisterLogo/>
    <RegisterHeading>The Torrent Company</RegisterHeading>
    <RegisterSearchBarDesign><RegisterSearchBar/></RegisterSearchBarDesign>


</div>


);

};