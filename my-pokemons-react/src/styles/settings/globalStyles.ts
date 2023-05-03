import { createGlobalStyle } from "styled-components";

type globalStyleProps = {
  theme: {
    body: string;
  };
};

export const globalStyle = createGlobalStyle<globalStyleProps>`
  body {
    background-color: ${(props) => props.theme.body};
  }
`;
