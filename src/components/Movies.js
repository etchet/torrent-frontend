import styled from "styled-components";

export const Movie = styled.div`
width: 166px;
height: 244px;
display: inline-block;
background-image: ${props =>
    props.image === 'p1' ? 'url("p1.jpg");' :
    props.image === 'p2' ? 'url("p2.jpg");' :
    props.image === 'p3' ? 'url("p3.jpg");' :
    props.image === 'p4' ? 'url("p4.jpg");' :
    props.image === 'p5' ? 'url("p5.jpg");' :
    'url("p1.jpg");'
}
background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin: 0px 18px;
  }
`;

export const MovieContainer = styled.div`
width: 1018.5px;
height: 248px;

margin-top:50px;
display: flex;
margin-left: auto;
margin-right: auto;
  justify-content: center;
  align-items: center;
`;

export const MovieGradient = styled.div`
width: 166px;
height: 83px;

position: relative;
top: 161px;
background-image: linear-gradient(180deg, rgba(196,196,196,0), rgba(100,254,218,1));
z-index: 2;

`;