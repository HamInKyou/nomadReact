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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  background-color: white;
  height: 70px;
  width: 70px;
  place-self: center;
  border-radius: 35px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

// 애니메이션과 관련된 '설정'을 분리된 오브젝트에 작성
const boxVariants = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 0.5, //0.5초 딜레이 후에 자식 컴포넌트 애니메이션 실행
      staggerChildren: 0.2, //자식들에 차례대로 0.2초씩 딜레이를 줘서 순차적으로 애니메이션 실행하게
    },
  },
};

const circleVariants = {
  start: {
    opacity: 0,
    y: 10,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};

function App() {
  return (
    <Wrapper>
      {/* 
        motion은 기본적으로 부모의 initial, animate 등을 자식에게 넘겨준다. 
        즉, 자식들도 initial="start" animate="end"라는 속성을 갖고있는 것.
        자식들에 동일한 속성 이름으로 속성에 다른 옵션을 주면, 자식은 그 옵션을 따른다.
      */}
      <Box variants={boxVariants} initial="start" animate="end">
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
      </Box>
    </Wrapper>
  );
}

export default App;
