import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 810px;
  gap: 10px;
`;

const Box = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  height: 200px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Circle = styled(motion.div)`
  background-color: #ffffff;
  height: 50px;
  width: 50px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  border-radius: 25px;
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ChangeButton = styled(motion.button)`
  margin-top: 30px;
  background-color: #ffffff;
  border-radius: 5px;
  border: 0;
  padding: 5px 10px;
  font-size: 18px;
  font-weight: 600;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  transition-duration: 0.2s;
  cursor: pointer;
`;
const overlay = {
  hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
  visible: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
  exit: { backgroundColor: "rgba(0, 0, 0, 0)" },
};

interface Ibox {
  transformOrigin: string;
}
const box = {
  normal: ({ transformOrigin }: Ibox) => ({
    scale: 1,
    transformOrigin,
  }),
  hover: {
    scale: 1.1,
  },
};

function App() {
  const [id, setId] = useState<null | string>(null);
  const [isLocatedTopRight, setIsLocatedTopRight] = useState<boolean>(true);
  const toggleIsLocatedTopRight = () => {
    setIsLocatedTopRight((prev) => !prev);
  };
  return (
    <Wrapper>
      <Grid>
        <Box
          variants={box}
          initial="normal"
          whileHover="hover"
          onClick={() => setId("top-left")}
          layoutId={"top-left"}
          custom={{ transformOrigin: "bottom right" }}
        />
        <Box
          variants={box}
          initial="normal"
          whileHover="hover"
          onClick={() => setId("top-right")}
          layoutId={"top-right"}
          custom={{ transformOrigin: "bottom left" }}
        >
          {isLocatedTopRight && <Circle layoutId={"circle"} />}
        </Box>
        <Box
          variants={box}
          initial="normal"
          whileHover="hover"
          onClick={() => setId("bottom-left")}
          layoutId={"bottom-left"}
          custom={{ transformOrigin: "top right" }}
        >
          {!isLocatedTopRight && <Circle layoutId={"circle"} />}
        </Box>
        <Box
          variants={box}
          initial="normal"
          whileHover="hover"
          onClick={() => setId("bottom-right")}
          layoutId={"bottom-right"}
          custom={{ transformOrigin: "top left" }}
        />
      </Grid>
      <ChangeButton
        onClick={toggleIsLocatedTopRight}
        style={{
          scale: isLocatedTopRight ? "1" : "1.2",
          color: isLocatedTopRight ? "#008DC0" : "#F0C200",
        }}
      >
        Switch
      </ChangeButton>
      <AnimatePresence>
        {id ? (
          <Overlay
            variants={overlay}
            onClick={() => setId(null)}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Box
              layoutId={id}
              style={{
                width: 400,
                height: 200,
                backgroundColor: "rgba(255, 255, 255, 1)",
              }}
            />
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
