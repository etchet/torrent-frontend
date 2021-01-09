import styled from 'styled-components'

export default styled.button `
        min-width: 20rem;
        min-height: 3rem;
        background: ${props =>
            props.color === 'danger' ? 'linear-gradient(180deg, #E25353 0%, #831E1E 100%);' :
            props.color === 'success' ? 'linear-gradient(0deg, #00CFAA -3.5%, #00F4FF 100%);' :
            props.color === 'warning' ? 'linear-gradient(180deg, #FFD346 0%, #CD5732 100%);' :
            'linear-gradient(0deg, #0046CF -3.5%, #0075FF 100%);'
        }
        box-shadow: 0rem 0.6rem 1.2rem rgba(0, 0, 0, 0.05);
        font-family: Tuffy;
        font-style: normal;
        font-weight: bold;
        font-size: 1rem;
        line-height: 1.6rem;
        color: #FFFFFF;
        text-align: center;
        border:0;
        outline:0;
        padding: 0.5rem 1.5rem;
        margin: 0.6rem;

        &:hover{
            box-shadow: 0rem 0.6rem 1.25rem rgba(0, 0, 0, 0.15); 
            cursor: pointer;  
        }
    `;
// Usage:

// In App.js

// <Button color = "success">Click me</Button>

// "color" can  be "success", "warning" or "danger" else there will be primary blue button.