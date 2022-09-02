import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;
const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
  font-size: 1rem;
`;
function App() {
  return (
    <Father>
      <Btn>button태그 버튼</Btn>
      <Btn as="a">a태그 버튼</Btn>
    </Father>
  );
}

export default App;
