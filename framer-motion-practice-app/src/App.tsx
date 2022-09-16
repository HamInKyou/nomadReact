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
  //useMotionValue를 통해 시시각각 바뀌는 motion 컴포넌트의 스타일값을 캐치할 수 있다.
  //이 값은 state가 아니다, 즉 해당 값이 변경되어도 리렌더링 되지 않는다!
  //따라서 이 변경값을 추적하려면 다른 방법이 필요하다.
  const boxX = useMotionValue(0);

  //useMotionValue를 통해 얻은 객체에 onChange 이벤트달 수 있다.
  //.get()을 통해 변한 값을 받을 수 있다!
  useEffect(() => {
    boxX.onChange(() => console.log(boxX.get()));
  }, [boxX]);
  return (
    <Wrapper>
      {/* 
        motion 컴포넌트는 향상된 style props가 있다.
        간단히 style props에 속성을 부여하여 변형시킬 수 있다.
        참고 : https://www.framer.com/docs/component/##transform
        여기선 useMotionValue를 통해 boxX를 만들었고, x값을 추적하고, 변경할 수 있게 만들었다. 
      */}
      <Box style={{ x: boxX }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}

export default App;
