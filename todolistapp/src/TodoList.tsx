import React from "react";
import { useForm } from "react-hook-form";

function ToDoList() {
  //register는 input요소를 Form에 등록시키는 함수, input에 대한 name, 이벤트 핸들러 등 리턴
  //formState는 form 상태에 대한 object
  const { register, handleSubmit, formState } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };
  //formState.errors는 validation에서 걸렸을 때 그 에러 상황이 담긴 object
  console.log(formState.errors);
  return (
    <div>
      {/* handleSubmit에서 유효성검사를 진행, 문제 없을 경우 onValid 실행 */}
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        {/*
        validation 해보기
        두번째 인자로 여러 validation 옵션 적용시켜줄 수 있다.
        validation에 걸리면 해당 input으로 자동으로 포커싱되게 해준다!
        validation에 걸리기 때문에 onValid 호출 안함!
        */}
        <input {...register("email", { required: true })} placeholder="Email" />
        <input
          {...register("First Name", { required: true })}
          placeholder="First Name"
        />
        <input
          {...register("Last Name", { required: true })}
          placeholder="Last Name"
        />
        <input
          // 최소 10글자 이상 되게 validation 주는 방법
          {...register("Username", { required: true, minLength: 10 })}
          placeholder="Username"
        />
        <input
          {...register("Password", { required: true, minLength: 5 })}
          placeholder="Password"
        />
        <input
          {...register("PasswordConf", { required: true, minLength: 5 })}
          placeholder="PasswordConf"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
