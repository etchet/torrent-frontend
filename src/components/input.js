import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: left;
    margin: 10px;
`;

const InputField = styled.input`
    width: ${props =>
        props.type === 'text' ? ' 450px;' :
        props.type === 'checkbox'? ' 14px;' :
        props.type === 'radio' ? '8px;' : '450px'
    };
    height: ${props =>
        props.type === 'text' ? ' 40px;' :
        props.type === 'checkbox'? ' 14px;' :
        props.type === 'radio' ? '8px;' : '40px'
    };
    background: #EEEEEE;
    box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.25);
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 16px;
    color: #B8B8B8; 
    padding-left: 20px; 
`;

const Label = styled.label`
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 16px;
    color: #FFFFFF;
    margin-bottom: 5px;
`;

function Input({placeholderText, type, name, label}) {
    return (
        <div>
            <Container>
                <Label>{label}</Label>
                <InputField type= {type} placeholder={placeholderText} name={name} required/>
            </Container>    
        </div>
    )
}

export default Input;


// to use

// import it using import Input from "./components/input";
// use the component using <Input label="First name" placeholderText="first name" type="text"/>