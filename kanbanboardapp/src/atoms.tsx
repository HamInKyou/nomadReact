import { atom, selector } from "recoil";

//시간(분)을 저장하는 atom
export const minuteState = atom({
  key: "minutes",
  default: 0,
});

//selector는 atom에서 후처리 과정을 거친 state의 일부를 나타낸다.
//즉, 기존 atom의 state 가져와서, 기존 state를 이용해 새로운 state를 만들어서 반환
//selector는 기존 state를 이용만할 뿐 변형시키지 않는다
export const hourSelector = selector<number>({
  key: "hours",
  get: ({ get }) => {
    //hourSelector의 state를 참조하려고 하면 이걸 수행
    const minutes = get(minuteState); //인자로 넣은 atom의 값 가져올 수 있음
    return minutes / 60;
  },
  set: ({ set }, newValue) => {
    //hourSelector의 setState를 수행하면 이걸 수행
    const minutes = Number(newValue) * 60;
    set(minuteState, minutes); //인자로 넣은 atom의 state를 수정 가능
  },
});
