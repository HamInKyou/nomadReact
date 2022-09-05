import { DefaultTheme } from "styled-components";
//이렇게 테마의 타입을 선언해줘야지, 나중에 까먹는게 없을 수 있다!

export const lightTheme: DefaultTheme = {
  bgColor: "white",
  textColor: "black",
};

export const darkTheme: DefaultTheme = {
  bgColor: "black",
  textColor: "white",
};
