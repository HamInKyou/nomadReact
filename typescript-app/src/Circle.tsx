import styled from "styled-components";

interface CircleProps {
  bgColor: string;
}

/** 인터페이스를 styled component에 적용하고 싶을 땐, <> 안에 담자! */
const Container = styled.div<CircleProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
`;

/** 인터페이스를 컴포넌트에 적용하고 싶을 때, object : interface 로 인자의 타입을 지정해주자*/
function Circle({ bgColor }: CircleProps) {
  return <Container bgColor={bgColor} />;
}

export default Circle;
