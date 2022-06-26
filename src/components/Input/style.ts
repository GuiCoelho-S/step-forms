import styled, { keyframes } from "styled-components";

interface IProps {
  isError: string | undefined
}

let bounce =  keyframes`
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
  border:1px solid ${({ isError }) => isError ? '#f13c3c': '#cecece'};
  padding:0.3rem;
  animation-delay: 0.25s;
  animation: ${({ isError }) => isError ? bounce: fixed } 0.5s linear;
}

`
export const ErrorContainer = styled.div`

min-height:20px;
font-size:0.8rem;
width:100%;
padding-top:0.2rem;
color:red;
`