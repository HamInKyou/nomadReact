import React from "react";
import Router from "./Router";
import { createGlobalStyle } from "styled-components";

// createGlobalStyle로 컴포넌트를 만들 수 있는데,
// 렌더링 될 때 이 컴포넌트는 전역 스코프에 스타일을 올려준다.
const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
* {
  box-sizing: border-box;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a {
  text-decoration: none;
}
`;

function App() {
  return (
    <>
      {/* 얘는 다른 컴포넌트를 감싸지 않아도 돼. 그저 렌더링될 때 전역 스코프에 스타일 올려준다! */}
      <GlobalStyle></GlobalStyle>
      <Router></Router>
    </>
  );
}

export default App;
