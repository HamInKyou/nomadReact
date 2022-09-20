import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
body {
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
    "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR",
    "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    sans-serif;
  font-weight: 300;
  line-height: 1.2;
  background-color:${(props) => props.theme.bgColor};
  color:${(props) => props.theme.textColor};
}
a {
  text-decoration:none;
  color:inherit;
}
`;

export default GlobalStyle;
