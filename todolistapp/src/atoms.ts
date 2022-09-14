import { atom, selector } from "recoil";

//enum은 숫자를 문자열로 표현한 것! 차례대로 0, 1, 2 ...
//"문자열" = "문자열" 로 하면 문자열 자체로 의미할 수 있다.
export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export interface IToDo {
  text: string;
  id: number;
  category: Categories;
}

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
});
export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

//selector는 atom에서 후처리 과정을 거친 state의 일부를 나타낸다.
//즉, 기존 state를 가져와서, 기존 state를 이용해 새로운 state를 만들어서 반환
//selector는 기존 state를 이용만할 뿐 변형시키지 않는다.
export const toDoSelector = selector({
  key: "toDoSelector",
  //selector에는 get이라는 메소드가 있다.
  get: ({ get }) => {
    //get메소드는 options를 인자로 받으면서 호출되는데, 이 options object 안에는 get이라는 메소드가 들어가있다.
    const toDos = get(toDoState); //options로 받은 get 메소드를 통해 selector의 내부로 atom을 들고올 수 있다.
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
