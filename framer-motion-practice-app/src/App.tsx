import styled from "styled-components";
import { motion, useMotionValue, useTransform } from "framer-motion";
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
  //useTransForm은 MotionValue의 변화량에 따라 반응하는 다른 MotionValue를 만들어주는 훅이다.
  //차례대로 motionValue, 입력값, 출력값이다.
  //boxX가 -800 이하일때 boxScale은 2, 0일때는 1, 800일 때는 0.1 이렇게 차례대로 매핑
  //그 순간에 어떤 motionValue를 갖게 될지 설정해준다. 그 사이는 자연스럽게 연결시켜줌!
  const boxScale = useTransform(boxX, [-800, 0, 800], [2, 1, 0.1]);
  useEffect(() => {
    boxX.onChange(() => console.log(boxX.get()));
  }, [boxX]);
  return (
    <Wrapper>
      <Box style={{ x: boxX, scale: boxScale }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}

export default App;
