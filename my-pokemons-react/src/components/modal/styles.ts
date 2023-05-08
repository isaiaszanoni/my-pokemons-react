import styled from "styled-components";
import { colors } from "../../styles/settings/theme";

export const Container = styled.div`
  .modal-overlay {
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 100vw;
    height: 100vh;
    position: fixed;
    background-color: ${colors.colors.gray500}20;
  }

  .modal-area {
    display: block;
    background: white;
    width: 40%;
    height: 70%;
    padding: 1rem;
    background-color: ${(props) => props.theme.colors.backgroundSecondary};

    border: solid 1px ${colors.colors.yellow};
    border-radius: 1rem;

    @media (max-width: 662px) {
      background-color: red;
      width: 100% !important;
    }
  }
`;
