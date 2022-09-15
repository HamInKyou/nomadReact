import { motion } from "framer-motion";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

//motion에서 들고온 element를 스타일드 컴포넌트로 만드려면 다음과 같이 상속받아서 써.
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

// 애니메이션과 관련된 '설정'을 분리된 오브젝트에 작성
const myVars = {
  //각 속성들의 이름은 아무거나 상관없음.
  start: { scale: 0 },
  end: { scale: 1, rotateZ: 360, transition: { type: "spring" } },
};

function App() {
  return (
    <Wrapper>
      {/* 어떤 variants를 쓸건지, 그 variants의 속성들 중에 어떤걸 가져다 쓸건지 */}
      <Box variants={myVars} initial="start" animate="end" />
    </Wrapper>
  );
}

export default App;
