import styled from "styled-components";
import { colors } from "../../styles/settings/theme";

export const Container = styled.div`
  width: 80%;
  height: 80%;
  min-height: 40vh;
  max-width: 480px;
  background-color: ${colors.colors.red};
  /* margin: 50px auto; */

  border-radius: 3%;

  .pokemon-image {
    width: 80%;
  }

  .filter {
    filter: blur(3px) brightness(0%);
    -webkit-filter: blur(3px) brightness(0%);
    -moz-filter: blur(3px) brightness(0%);
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  width: 100%;

  .poke-input {
    height: 2.3rem;
    width: 60%;
    max-width: 550px;
    min-width: 240px;
    border-radius: 8px;

    font-size: 1.2rem;
    text-align: center;
    font-weight: 600;
    color: ${colors.colors.darkBlue};
  }
`;
