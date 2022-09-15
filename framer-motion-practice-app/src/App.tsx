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
  hover: { rotateZ: 90 }, //호버하면 90도 회전하게
  click: { borderRadius: "100px" }, //클릭하는동안 동그래지게
};

function App() {
  return (
    <Wrapper>
      <Box
        drag="x" //x축으로만 드래그 가능함, "y"로하면 y축으로만 드래그 가능
        variants={boxVariants}
        whileHover="hover" //호버하면 실행할 에니메이션
        whileTap="click" //클릭하는 동안 실행할 애니메이션
      />
    </Wrapper>
  );
}

export default App;
