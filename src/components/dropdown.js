import React, { useState } from "react";
import styled from "styled-components";

const Label = styled("label")`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  color: #FFFFFF;
  display: inline-block;
`;

const DropDownContainer = styled("div")`
  background: #EEEEEE;
  width: 450px;
  height: 40px;
  margin: 0 auto;
  border-radius: 2px;
  box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.25);
`;

const DropDownHeader = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 10.5px 20px 10.5px 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 16px;
  color: #B8B8B8;
`;

const DropDownListContainer = styled("div")`
  position: absolute;
  z-index: 100;
  width: 450px;
  height: 40px;
`;

const DropDownList = styled("ul")`
  margin: 0;
  padding: 0 0 1px 16px;
  background: rgba(238, 238, 238, 0.2);
  box-sizing: border-box;
  color: #00E3D9;
  font-size: 16px;
  font-weight: 700;
  &:first-child {
    padding-top: 12px;
  }
  
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 13px;
  &:hover {
      color: #fd9e46;
  }
`;



export default function Dropdown({placeholderText, label, option}) {

    const options = option;

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  return (
    <Label>
        {label}
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>
          {selectedOption || placeholderText}
          <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.70187 11.0006L17.712 2.99062C17.8974 2.80536 17.9995 2.55805 17.9995 2.29434C17.9995 2.03064 17.8974 1.78332 17.712 1.59805L17.1222 1.00813C16.7379 0.624266 16.1133 0.624246 15.7296 1.00808L9.00324 7.73426L2.2694 1.00019C2.08398 0.814918 1.83681 0.712619 1.57326 0.71261C1.3094 0.712602 1.06223 0.814886 0.876677 1.00015L0.287071 1.59003C0.101658 1.77543 -0.000486431 2.0226 -0.000486443 2.2863C-0.000486454 2.55001 0.101658 2.79733 0.287071 2.9826L8.30447 11.0005C8.49047 11.1863 8.73881 11.2883 9.0028 11.2877C9.26783 11.2883 9.51602 11.1863 9.70187 11.0006Z" fill="#B8B8B8"/>
          </svg>
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {options.map(option => (
                <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </Label>
  );
}

// to use
// import using import Dropdown from "./components/dropdown";
// define an array for options to be given in the menu eg. const options = ["Male", "Female", "Other"];
// then use drop component using <Dropdown placeholderText="Select from the given options" label="Gender" option= {options}/>