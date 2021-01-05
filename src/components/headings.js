import styled from 'styled-components'

export default styled.h3 `
        font-family: Tuffy;
        
        padding: 0px;
        margin: 0px;
font-style: normal;
font-weight: bold;
        font-size: ${props =>
            props.text === 'large ' ? '28px;' :
            props.text === 'caption' ? '24px;' :
            props.text === 'normal' ? '16px;' :
            props.text === 'small' ? '14px;' :
            '24px;'
        }
        line-height: ${props =>
            props.text === 'large ' ? '42px;' :
            props.text === 'caption' ? '36px;' :
            props.text === 'normal' ? '24px;' :
            props.text === 'small' ? '21px;' :
            '36px;'
        }
        color: ${props =>
            props.color === 'green' ? '#00E3D9' :
            props.color === 'black' ? '#000000' :
            '#FFFFFF'
        }
    `;
// Usage:

//import Headings from "./components/Headings.js";

// In App.js

// <Headings text = "large">Hello</Headings>

// "text" can  be "large", "caption","normal" or "small" else there will be normal text.

// "color" can  be "green" or "black" else there will be white color.