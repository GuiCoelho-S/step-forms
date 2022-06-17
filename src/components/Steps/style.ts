import { StepConnector, stepConnectorClasses, styled as muiStyle } from "@mui/material";
import styled from "styled-components";

interface BtnProps {
  state: boolean;
}
export const Container = styled.div`

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

export const ColorlibConnector = muiStyle(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));