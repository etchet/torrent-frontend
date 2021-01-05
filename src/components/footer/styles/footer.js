import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  max-width: 100%;
  height: fit-content;
  background: #3B414B;
  padding-top: 80px;
 

  @media (max-width: 900px) {
    padding-top: 70px
  }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  @media (max-width: 900px) {
    text-align:center;
  } 

`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.6fr 1.2fr;
  grid-gap: 60px;
  align-items: center;

   @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  } 

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  } 
`;

export const Link = styled.a`
  margin-bottom: 10px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
  text-decoration: none;

  &:hover {
      color: #ff9c00;
      box-shadow: 0 1rem 2rem rgba(0,0,0,0.4);
      transform: rotate(5deg) scale(1.3);
      transition: 200ms ease-in;
      width: 125px;  
  }
`;

export const Title = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 39px;
  background:linear-gradient(#00CFAA 100%, #00F4FF 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-top: 0;
 `;

export const Para = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
  margin-top: 0;

  @media (max-width: 900px) {
    padding:0 30px;
  } 
`;

export const Logo = styled.span`
`;

export const Copyright = styled.div`

font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 30px;
text-align: center;
color: #FFFFFF;
background-color:#434C5A;
margin-top:50px;
max-width:100vw;
width: 100%;
padding:10px 0;
`;