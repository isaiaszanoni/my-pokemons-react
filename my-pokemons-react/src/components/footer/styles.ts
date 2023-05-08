import styled from "styled-components";
import { colors } from "../../styles/settings/theme";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.backgroundSecondary};

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  min-height: 5vh;
  width: 100%;

  margin-bottom: auto;

  Button {
    background-color: ${colors.colors.red};
    font-size: 0.8rem;
    height: fit-content;
  }

  Button:hover {
    background-color: ${colors.colors.darkRed};
    color: ${colors.colors.gray100};
  }
`;
