import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  margin-top: 10px;
`;

const InputField = styled.input`
  width: ${(props) => (props.name === "Search" ? "576px" : props.type === "text" ? " 450px;" : props.type === "checkbox" ? " 14px;" : props.type === "radio" ? "12px;" : "450px")};
  height: ${(props) => (props.type === "text" ? " 40px;" : props.type === "checkbox" ? " 14px;" : props.type === "radio" ? "12px;" : "40px")};
  background: #eeeeee;
  box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.25);
  font-style: normal;
  font-weight: bold;
  border: 0;
  font-size: 16px;
  line-height: 16px;
  color: #b8b8b8;
  padding-left: 20px;
  margin-top: ${(props) => (props.type === "radio" ? "3px;" : "0")};
  margin-right: ${(props) => (props.type === "radio" || "checkbox" ? "12px" : "0")};
`;

const Label = styled.label`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
  color: #ffffff;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
`;

const SearchButton = styled.button`
    display: inline-block;
    background: linear-gradient(0deg, #00CFAA -3.5%, #00F4FF 100%);
    box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.25);
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    outline: none;
    margin-left: 14px;
    transition: all .1s;

    &:active{
        transform: scale(.95);
    }
`;

function Input({ placeholderText, type, name, label }) {
  if (type == "search") {
    return (
      <Label>
        {label}
        <Container>
          <InputField type={type} placeholder={placeholderText} name={name} required />
          <SearchButton>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M23.2332 21.8602L17.5212 15.9194C18.9898 14.1735 19.7945 11.9768 19.7945 9.68999C19.7945 4.34701 15.4475 0 10.1045 0C4.76156 0 0.414551 4.34701 0.414551 9.68999C0.414551 15.033 4.76156 19.38 10.1045 19.38C12.1104 19.38 14.0218 18.775 15.6561 17.6265L21.4115 23.6124C21.6521 23.8622 21.9756 24 22.3224 24C22.6506 24 22.9619 23.8749 23.1982 23.6474C23.7004 23.1641 23.7165 22.3628 23.2332 21.8602ZM10.1045 2.52782C14.0538 2.52782 17.2667 5.74069 17.2667 9.68999C17.2667 13.6393 14.0538 16.8522 10.1045 16.8522C6.15524 16.8522 2.94237 13.6393 2.94237 9.68999C2.94237 5.74069 6.15524 2.52782 10.1045 2.52782Z"
                fill="black"
              />
            </svg>
          </SearchButton>
        </Container>
      </Label>
    );
  } else if (type == "checkbox" || type == "radio") {
    return (
      <Label>
        <Container>
          <InputField type={type} placeholder={placeholderText} name={name} required />
          {label}
        </Container>
      </Label>
    );
  } else {
    return (
      <Label>
        {label}
        <Container>
          <InputField type={type} placeholder={placeholderText} name={name} required />
        </Container>
      </Label>
    );
  }
}

export default Input;

// to use

// import it using import Input from "./components/input";
// use the component using <Input label="First name" placeholderText="first name" type="text" name="first name"/>
// for search bar use name="Search"
