import styled from "styled-components";
import {FinalRegisterNav} from "../../components/RegisterNavbar.js";
import Headings from "../../components/Heading.js";
import Field from "../../components/Field.js";
import Button from "../../components/Button.js";

const LoginHeading = styled.h2`
font-family: Open Sans;
font-style: normal;
font-weight: bold;
font-size: 36px;
line-height: 49px;
text-align: center;
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
  margin: 0px auto 20px auto;
  
  `;
  
  const LoginBoxDesign = styled.div`
  width: 529px;
  height: 367px;
  background-color: #3B414B;
  padding-left:15px;
  display:inline-block;
  position:absolute;
  
  
  `;
  
  const ButtonBox = styled.div`
  width: 529px;
  height: 50px;
  display: inline-block;
  text-align:center;
  
  `
  ;
  
  const LoginBox = () =>{
    return(
      <LoginBoxDesign>
  <LoginHeading>Login</LoginHeading>
  
  <InputBox name="Your Email"/>
  <InputBox name="Password"/>
  
  <div>
  <ButtonBox> <Button size="mid">Login</Button></ButtonBox>
  
  
  </div>
      </LoginBoxDesign>
    );
  };

const ImageBox = styled.div`
background-image:url('movies2.jpeg');
width: 245px;
height: 367px;
background-repeat: no-repeat;
background-position: center;
background-size: cover;
display:inline-block;

`;

const FinalLoginBox = styled.div`
margin:80px auto 50px auto;
position:absolute;
left:300px;


`;

function Login() {
  return <div>
    <FinalRegisterNav/>
    <FinalLoginBox>
    <ImageBox/>
    <LoginBox/>
    </FinalLoginBox>
  </div>;
}

export default Login;
