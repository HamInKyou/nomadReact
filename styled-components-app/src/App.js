import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;

  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 40px;
  }
`;

function App() {
  return (
    <Wrapper as="header">
      <Box>
        <span>😊</span>
      </Box>
    </Wrapper>
  );
}

export default App;
