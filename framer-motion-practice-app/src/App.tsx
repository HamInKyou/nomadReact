import styled from "styled-components";
import { motion } from "framer-motion";
import { useRef } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  hover: { rotateZ: 90 }, //호버하면 90도 회전하게
  click: { borderRadius: "100px" }, //클릭하는동안 동그래지게
};

function App() {
  const biggerBoxRef = useRef<HTMLDivElement>(null);
  return (
    <Wrapper>
      <BiggerBox ref={biggerBoxRef}>
        <Box
          drag
          dragSnapToOrigin //드래그 손 떼면 제일 처음 본래 위치로 돌아가게
          dragConstraints={biggerBoxRef}
          variants={boxVariants}
          whileHover="hover" //호버하면 실행할 에니메이션
          whileTap="click" //클릭하는 동안 실행할 애니메이션
        />
      </BiggerBox>
    </Wrapper>
  );
}

export default App;
