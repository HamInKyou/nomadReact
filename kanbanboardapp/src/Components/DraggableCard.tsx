import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px 10px;
  background-color: ${(props) => props.theme.cardColor};
`;

interface IDragableCardProps {
  toDo: string;
  index: number;
}

function DraggableCard({ toDo, index }: IDragableCardProps) {
  console.log(toDo, "has been rendered");
  return (
    <Draggable key={toDo} draggableId={toDo} index={index}>
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
  );
}

//리액트에서 컴포넌트의 state가 변하면 해당 컴포넌트의 자식들은 모두 리렌더링된다.
//리렌더링 될 필요가 없는 자식들은 리렌더링하지 않게 하는 방법은 없을까?
//React.memo를 사용해서, DraggableCard의 props가 변하지 않았다면 리렌더링되지 않게 해줄 수 있다.
export default React.memo(DraggableCard);
