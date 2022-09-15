import styled from "styled-components";
import { motion } from "framer-motion";

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

const boxVariants = {
  hover: { scale: 1.5, rotateZ: 90 },
  click: { scale: 1, borderRadius: "100px" },
  drag: { backgroundColor: "rgb(46, 204, 113)", transition: { duration: 1 } },
};

function App() {
  return (
    <Wrapper>
      <Box
        drag //이 props를 줌으로써 컴포넌트를 클릭하고 이리저리 끌 수 있음
        variants={boxVariants}
        whileHover="hover" //마우스 호버했을때 실행할 애니메이션
        whileDrag="drag" //드래그하는동안 실행할 애니메이션
        whileTap="click" //클릭하는 동안 실행할 애니메이션
      />
    </Wrapper>
  );
}

export default App;
