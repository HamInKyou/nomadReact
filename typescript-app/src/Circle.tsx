import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 1px solid ${(props) => props.borderColor};
`;

interface CircleProps {
  bgColor: string;
  borderColor?: string; // optional Props -> undefined로 보내줘도 된다!
  text?: string;
}

// 구조분해할 때, default값을 동시에 지정해줄 수 있다!
function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
  return (
    // ?? 연산을 통해 borderColor가 undefined로 넘어왔을 경우 bgColor를 기본값으로 borderColor에 설정해주기!
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
}

export default Circle;
