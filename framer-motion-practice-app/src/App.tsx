import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  position: absolute;
  top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const box = {
  //custom값을 받아서 variants에 적용하려면, 이전의 객체 형식이 아니라 함수 형식으로 작성되어야해!
  entry: (isBack: boolean) => ({
    //custom에서 지정한 값을 인자로 받는다.
    x: isBack ? -500 : 500,
    opacity: 0,
    scale: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: (isBack: boolean) => ({
    x: isBack ? 500 : -500,
    opacity: 0,
    scale: 0,
    transition: { duration: 0.3 },
  }),
};
function App() {
  const [visible, setVisible] = useState(1); //현재 차례의 슬라이드
  const [back, setBack] = useState(false); //슬라이드 어디 방향으로 이동시킬지에 대한 state
  const nextPlease = () => {
    setBack(false); //back이 false니까 오른쪽에서 새로운게 나오는 방향으로
    setVisible((prev) => (prev === 10 ? 10 : prev + 1));
  };
  const prevPlease = () => {
    setBack(true); //back이 true니까 왼쪽에서 새로운게 나오는 방향으로
    setVisible((prev) => (prev === 1 ? 1 : prev - 1));
  };
  return (
    <Wrapper>
      {/* Box exit할 때 수행하는 애니메이션에 대한 variants에 custom 전해주려면 exit을 발생시키는 AnimatePresence에 custom을 전달해줘야한다! */}
      <AnimatePresence custom={back}>
        <Box
          custom={back} //variants에 custom 전달하여 동적으로 애니메이션 조작할 수 있게 해주었다!
          variants={box}
          initial="entry"
          animate="center"
          exit="exit"
          key={visible}
          //리액트 컴포넌트는 key가 바뀔 때마다 새로운 컴포넌트라고 생각하고 기존걸 언마운트 시키고 새걸 새롭게 마운트시킨다!
          //즉, key가 바뀌면 initial, animate, exit를 모두 수행한다는 것!
        >
          {visible}
        </Box>
      </AnimatePresence>
      <button onClick={nextPlease}>next</button>
      <button onClick={prevPlease}>prev</button>
    </Wrapper>
  );
}

export default App;
