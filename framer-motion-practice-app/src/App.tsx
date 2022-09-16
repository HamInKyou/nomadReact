import styled from "styled-components";
import { motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  const boxX = useMotionValue(0);

  return (
    <Wrapper>
      <button
        onClick={() => {
          // .set으로 바로 변형 줄 수 있음
          // 변형 사이에 애니메이션 없이 바로 뚝 바뀜
          boxX.set(200);
        }}
      >
        click me
      </button>
      <Box style={{ x: boxX }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}

export default App;
