import { IToDo } from "../atoms";

function ToDo({ text, category }: IToDo) {
  //interface["속성"]을 통해서 특정 속성의 타입을 뽑아낼 수 있다.
  const onClick = (newCategory: IToDo["category"]) => {
    console.log("i wanna to ", newCategory);
  };
  return (
    <li>
      <span>{text}</span>
      {category !== "DOING" && (
        <button onClick={() => onClick("DOING")}>Doing</button>
      )}
      {category !== "TO_DO" && (
        <button onClick={() => onClick("TO_DO")}>To Do</button>
      )}
      {category !== "DONE" && (
        <button onClick={() => onClick("DONE")}>Done</button>
      )}
    </li>
  );
}

export default ToDo;
