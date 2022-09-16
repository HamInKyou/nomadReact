import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  position: absolute;
  top: 100px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateZ: 360,
  },
  leaving: {
    opacity: 0,
    scale: 0,
    y: 50,
  },
};

function App() {
  const [showing, setShowing] = useState(false);
  const toggleShowing = () => setShowing((prev) => !prev);
  return (
    <Wrapper>
      <button onClick={toggleShowing}>Click</button>
      {/* 컴포넌트 언마운트될때 애니메이션을 주려면 AnimatePresence 컴포넌트로 감싸고, 안에 조건부 렌더링 구문을 포함하자. */}
      <AnimatePresence>
        {showing ? (
          <Box
            variants={boxVariants}
            initial="initial" //컴포넌트 마운트 되었을 떄 초기 상태
            animate="visible" //애니메이션 끝 상태
            exit="leaving" //AnimatePresence에 의해 사용되어질 수 있는 속성, 컴포넌트가 사라질 때 수행할 끝 애니메이션
          />
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
