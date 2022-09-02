import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;

  &:hover {
    background-color: yellow;
  }
`;

function App() {
  return (
    <Wrapper as="header">
      <Box></Box>
    </Wrapper>
  );
}

export default App;
