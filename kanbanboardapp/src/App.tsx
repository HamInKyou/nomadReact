import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "./atoms";
import Board from "./Components/Board";

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 10px;
`;

function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = (info: DropResult) => {
    //목적지에 대한 정보, 드래그하는 요소의 정보, 시작지에 대한 정보
    const { destination, draggableId, source } = info;
    if (!destination) return;
    if (destination?.droppableId === source.droppableId) {
      // 같은 보드 내에서 드래그앤 드롭했을 경우
      setToDos((allBoards) => {
        //allBoards 업데이트
        const boardCopy = [...allBoards[source.droppableId]]; //보드 하나 복사본 뜨기
        //복사본 뜬거에 수정하기
        boardCopy.splice(source.index, 1);
        boardCopy.splice(destination?.index, 0, draggableId);

        //업데이트하기
        return {
          ...allBoards,
          [source.droppableId]: boardCopy,
        };
      });
    }
    if (destination.droppableId !== source.droppableId) {
      // 다른 보드로 드래그앤 드롭했을경우
      setToDos((allBoards) => {
        const sourceBoard = [...allBoards[source.droppableId]]; //시작 복사본 만들기
        const destinationBoard = [...allBoards[destination.droppableId]]; //목적지 복사본 만들기
        sourceBoard.splice(source.index, 1); //시작에서 지우고
        destinationBoard.splice(destination?.index, 0, draggableId); //목적지에 추가하기
        //지우고 추가한 복사본 보드들을 업데이트하기
        return {
          ...allBoards,
          [source.droppableId]: sourceBoard,
          [destination.droppableId]: destinationBoard,
        };
      });
    }
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(toDos).map((boardId) => (
            <Board boardId={boardId} key={boardId} toDos={toDos[boardId]} />
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;
