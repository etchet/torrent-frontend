import styled from "styled-components";


const RegisterLogo = styled.div`
background-image:url('TorrentCompanyLogo.png');
width: 66px;
height: 72px;
background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: inline-block;
`;

const Categories = styled.ul`


display: inline-block;
margin-left:260px;
  position:absolute;
`;


const Category = styled.li`
display: inline-block;
color: #FFFFFF;
font-family: Tuffy;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 36px;
margin: 0px 40px 0px 40px;

`;




export const FinalSearchNavbar= () =>{
    return(
        <div>
            <RegisterLogo/>
            
            <Categories>
                <Category>Home</Category>
                <Category>Browse</Category>
                <Category>Top 10</Category>
                <Category>Downloads</Category>
            </Categories>

        </div>
    );
};