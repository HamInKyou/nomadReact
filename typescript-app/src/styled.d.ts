// declarations(선언) 파일
// 확장자 : .d.ts

// npm install @types/sttled-components 를 통해 설치했던 styled-components에 대한 선언 파일을
import "styled-components";

// 추가로 확장하겠다!
declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
  }
}
