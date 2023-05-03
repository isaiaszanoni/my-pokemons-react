import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  text-align: center;
  align-items: center;
  flex-wrap: wrap;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.backgroundMain};

  main {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: 100%;
  }

  main > * {
    margin: 1vh auto 3vh;
  }

  main > input {
    width: 60%;
    height: 30px;
    margin: 0 auto;
  }
`;
