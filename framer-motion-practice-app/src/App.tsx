import styled from "styled-components";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";

const Wrapper = styled(motion.div)`
  height: 500vh;
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
  const boxRotateZ = useTransform(boxX, [-800, 800], [-360, 360]);
  //useScroll은 스크롤 상태(State)를 반환하는 훅
  //scrollX/Y는 X/Y축으로 스크롤한 픽셀값, scrollX/YProgress는 스크롤 끝을 1로 보았을 때, 0부터 시작하여 X/Y축으로 어느정도 스크롤 했는지!
  const { scrollY, scrollYProgress } = useScroll();
  const gradient = useTransform(
    boxX,
    [-800, 800],
    [
      "linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 83, 238))",
      "linear-gradient(135deg, rgb(0, 238, 155), rgb(238, 178, 0))",
    ]
  );
  useEffect(() => {
    boxX.onChange(() => console.log(boxX.get()));
  }, [boxX]);
  useEffect(() => {
    scrollY.onChange(() => console.log(scrollY.get(), scrollYProgress.get()));
  }, [scrollY, scrollYProgress]);
  return (
    <Wrapper style={{ background: gradient }}>
      <Box style={{ x: boxX, rotateZ: boxRotateZ }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}

export default App;
