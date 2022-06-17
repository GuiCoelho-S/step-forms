import styled from "@emotion/styled";

interface IProps {
  state:boolean;
}
export const Container = styled.div<IProps>`

width:60px;
height: 60px;
border-radius: 50%;

display: flex;
flex-direction: column;
align-items: center;

svg {
  width:30px;
  height: 30px;
  fill: ${({ state }) => state ? "#de0202" : "#a2a2a2"}
}
`