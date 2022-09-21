import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "./atoms";

const Wrapper = styled.div`
  display: flex;
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(1, 1fr);
`;

const Board = styled.div`
  padding: 20px 10px;
  padding-top: 30px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 200px;
`;

const Card = styled.div`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px 10px;
  background-color: ${(props) => props.theme.cardColor};
`;

function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = ({ draggableId, destination, source }: DropResult) => {
    //draggableId는 드래그하는 애의 draggableId
    //destination은 드랍하는 곳의 정보 (droppableId, index 갖는다)
    //source는 드래그 시작하는 곳의 정보 (droppableId, index 갖는다)
    if (!destination) return; //목적지 없음 그냥 끝내기
    setToDos((oldToDos) => {
      const toDosCopy = [...oldToDos]; //불변성 위해 카피
      // 1) Delete item on source.index 시작 위치의 요소 지우기
      console.log("Delete item on", source.index);
      toDosCopy.splice(source.index, 1); //index 위치에서 한개 제거
      // 2) Put back the item on the destination.index // 종료 위치에 생성하기
      toDosCopy.splice(destination?.index, 0, draggableId); //종료위치에 삽입
      console.log(toDosCopy);
      return toDosCopy;
    });
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          <Droppable droppableId="one">
            {(magic) => (
              <Board ref={magic.innerRef} {...magic.droppableProps}>
                {toDos.map((toDo, index) => (
                  //draggable의 key는 draggableId랑 같아야한다!
                  <Draggable draggableId={toDo} index={index} key={toDo}>
                    {(magic) => (
                      <Card
                        ref={magic.innerRef}
                        {...magic.dragHandleProps}
                        {...magic.draggableProps}
                      >
                        {toDo}
                      </Card>
                    )}
                  </Draggable>
                ))}
                {/* magic.placeholder를 droppalbeProps를 할당한 자식의 맨 뒤에 넣으면
                Draggable한 요소가 드래그 중일 때 droppable한 요소의 크기가 변화하지 않는다!
                드래그하는동안 그 요소가 빠졌다고 취급하지 않는것. */}
                {magic.placeholder}
              </Board>
            )}
          </Droppable>
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;
