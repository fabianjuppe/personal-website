import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --color-one: #353535;
    --color-two: #3C6E71;
    --color-three: #FFFFFF;
    --color-four: #D9D9D9;
    --color-five: #284B63;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }
`;
