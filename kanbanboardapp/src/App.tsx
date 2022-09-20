import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function App() {
  const onDragEnd = () => {};
  return (
    // DragDropContext는 드래그 앤 드롭을 가능하게 하고자 하는 영역
    // onDragEnd는 필수로, 유저가 드래그를 끝낸 시점에 불려지는 함수(필수props)
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        {/* 
        Dropable은 우리가 드롭해서 놓을 수 있는 영역
        Dropable의 자식은 element가 아니라 함수여야한다! 
        */}
        <Droppable droppableId="one">
          {() => (
            <ul>
              {/* 
              Draggable은 우리가 드래그할 수 있는 요소 설정하는 것
              Droggable의 자식은 element가 아니라 함수여야한다!
              Draggable은 draggableId랑 index를 필수 props로 갖는다! 
              */}
              <Draggable draggableId="first" index={0}>
                {() => <li>One</li>}
              </Draggable>
              <Draggable draggableId="second" index={1}>
                {() => <li>Two</li>}
              </Draggable>
            </ul>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}

export default App;
