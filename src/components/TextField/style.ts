import styled, { keyframes } from "styled-components";

interface IProps {
  isError: string | undefined
}

interface IPropsRadio {
  inputColor?: string
}

let bounce = keyframes`
  0% {
    transform: translateX(0px);
    timing-function: ease-in;
  }
  37% {
    transform: translateX(5px);
    timing-function: ease-out;
  }
  55% {
    transform: translateX(-5px);
    timing-function: ease-in;
  }
  73% {
    transform: translateX(4px);
    timing-function: ease-out;
  }
  82% {
    transform: translateX(-4px);
    timing-function: ease-in;
  }
  91% {
    transform: translateX(2px);
    timing-function: ease-out;
  }
  96% {
    transform: translateX(-2px);
    timing-function: ease-in;
  }
  100% {
    transform: translateX(0px);
    timing-function: ease-in;
  }
`

let fixed = keyframes``;

export const Container = styled.div<IProps>`

display:flex;
flex-direction: column;

input {
  margin-top: 0.4rem;
  width:100%;
  font-size:1rem;
  border-radius: 4px;
  border:1px solid ${({ isError }) => isError ? '#f13c3c' : '#cecece'};
  padding:0.3rem;
  animation-delay: 0.25s;
  animation: ${({ isError }) => isError ? bounce : fixed} 0.5s linear;
}

`
export const ErrorContainer = styled.div`

min-height:20px;
font-size:0.8rem;
width:100%;
padding-top:0.2rem;
color:red;
`

export const RadioContainer = styled.ul`

display:flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-evenly;
width:100%;
height:auto;

li {
  margin-top:0.8rem;
  bordeR:1px solid red;
  list-style: none;
  height:100%;
  display:flex;
  align-items: center;
  justify-content: space-between;
  height:auto;
  align-items: center;
  padding:0.5rem;
}
`;

export const RadioInput = styled.input<IPropsRadio>`
  margin:0 1rem 0 0 !important;
  width:20px !important;
  heighT:20px;
  accent-color: ${({ inputColor }) => inputColor ? inputColor : "#228af1"};
`
export const CheckboxContainer = styled(RadioContainer)`

justify-content:center;
li {
  margin-left:1rem;
  width:140px;
  flex-wrap:wrap;
  justify-content:space-between;
}
input {
  width:20px;
  height:20px;
  margin:0;
  margin-right:0.6rem;
}
`
