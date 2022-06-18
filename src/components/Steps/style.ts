import { StepConnector, stepConnectorClasses, styled as muiStyle } from "@mui/material";
import styled from "styled-components";

interface BtnProps {
  state: boolean;
}
export const Container = styled.div`

display:flex;
height:100%;
flex-direction: column;
justify-content: space-between;
padding:1rem;

.activeStep {
  svg {
    fill:red;
  }
}
`

export const NavigationStep = styled.footer`

width:100%;
display: flex;
align-items: center;
justify-content: space-between;
`

export const Button = styled.button<BtnProps>`

background:${({ state }) => state ? "#244fb2" : "#eff3fd"};
color:${({ state }) => state ? "#fff" : "#333"};
`
