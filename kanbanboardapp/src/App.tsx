import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function App() {
  const onDragEnd = () => {};
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <Droppable droppableId="one">
          {/* 
          Droppable의 자식으로 쓰이는 함수
          첫번째 인자 magic -> 공식 예제에선 provided라고 썼지만, 이름 바꿔도 상관없다는걸 알 수 있다.
          첫번째 인자 magic 객체는 innerRef와 droppableProps를 갖고 있다.
          */}
          {(magic) => (
            <ul ref={magic.innerRef} {...magic.droppableProps}>
              <Draggable draggableId="first" index={0}>
                {/* 
                Draggable의 자식으로 쓰이는 함수
                첫번째 인자 magic -> 공식 예제에선 provided라고 썼지만, 이름 바꿔도 상관없다는걸 알 수 있다.
                첫번째 인자 magic 객체는 innerRef와 draggableProps와 dragHandleProps를 갖고 있다.
                Draggable로 감싼 요소를 드래그하고 싶을 때, draggableProps를 할당해주어 드래그할 수 있게 설정한다.
                Draggable로 감싼 요소 중에 ragHandleProps를 할당해주어야 그 요소를 잡고 드래그 할 수 있게 된다!(할당 안하면 드래그 안됨!)
                */}
                {(magic) => (
                  <li
                    ref={magic.innerRef}
                    {...magic.draggableProps}
                    {...magic.dragHandleProps}
                  >
                    <span>🔥</span>
                    One
                  </li>
                )}
              </Draggable>
              <Draggable draggableId="second" index={1}>
                {(magic) => (
                  <li ref={magic.innerRef} {...magic.draggableProps}>
                    <span {...magic.dragHandleProps}>🔥</span>
                    Two
                  </li>
                )}
              </Draggable>
            </ul>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}

export default App;
