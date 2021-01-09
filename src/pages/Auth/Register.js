import React from "react";
import Auth from "../../layouts/Auth";
import styled from "styled-components";
import Dashboard from "../../layouts/Dashboard";
import {FinalRegisterNav} from "../../components/RegisterNavbar.js";
import Headings from "../../components/Heading.js";
import Field from "../../components/Field.js";
import Button from "../../components/Button.js";
import {copyright} from "../../components/footer/styles/footer.js"


const RegisterHeading = styled.h2`
font-family: Open Sans;
font-style: normal;
font-weight: bold;
font-size: 36px;
line-height: 49px;

text-align: center;
position: relative;

color: #FFFFFF;

`
;




const InputBox = (props) =>{
return(
  <InputBoxDesign>
<Headings text="small" marginLeft="yes">{props.name}</Headings>
<Field type="text"/>


  </InputBoxDesign>
);

};

const InputBoxDesign= styled.div`
margin: 0px auto 24px auto;

`;

const RegisterBoxDesign = styled.div`
width: 529px;
height: 541px;
background-color: #3B414B;
padding-left:7px;
display:inline-block;
position:relative;
left:4px;

`;

const RegisterBox = () =>{
  return(
    <RegisterBoxDesign>
<RegisterHeading>Register</RegisterHeading>
<InputBox name="Your Name"/>
<InputBox name="Your Email"/>
<InputBox name="Password"/>
<InputBox name="Confirm Password"/>
<div>
<div className="make-inline-block"> <Button>Register</Button></div>
<div className="make-inline-block"><Headings text="small">want to login?</Headings></div>
</div>
    </RegisterBoxDesign>
  );
};

const ImageBox = styled.div`
background-image:url('watching2.jpg');
width: 361px;
height: 541px;
background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: inline-block;
  


`;
const FinalRegisterBox = styled.div`
margin:80px auto 50px 180px;

display: inline-block;
  flex-direction: column;
  
  align-items: center;
  



`;


function Register() {
  return (<div>
    <FinalRegisterNav/>
    <FinalRegisterBox>
    <RegisterBox/>  <ImageBox/>
    
    </FinalRegisterBox>
    <copyright/>

   </div> );
};

export default Register;
