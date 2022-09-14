import React from "react";
import { useForm } from "react-hook-form";

function ToDoList() {
  //register는 input요소를 Form에 등록시키는 함수, input에 대한 name, 이벤트 핸들러 등 리턴
  //formState는 form 상태에 대한 object
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };
  return (
    <div>
      {/* handleSubmit에서 유효성검사를 진행, 문제 없을 경우 onValid 실행 */}
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          //pattern에 정규식 넣어 패턴에 일치하는 경우만 허락할 수 있다.
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only naver.com emails allowed",
            },
          })}
          placeholder="Email"
        />
        <span>{errors?.email?.message as string}</span>
        <input
          {...register("FirstName", { required: "First Name is required" })}
          placeholder="First Name"
        />
        <span>{errors?.FirstName?.message as string}</span>
        <input
          {...register("LastName", { required: "Last Name is required" })}
          placeholder="Last Name"
        />
        <span>{errors?.LastName?.message as string}</span>
        <input
          // 최소 10글자 이상 되게 validation 주는 방법
          {...register("Username", {
            required: "Username is required",
            minLength: 10,
          })}
          placeholder="Username"
        />
        <span>{errors?.Username?.message as string}</span>
        <input
          //validation 속성에 그 속성에 대한 에러메세지 넣을 수 있다.
          {...register("Password", {
            required: "password is required",
            minLength: 5,
          })}
          placeholder="Password"
        />
        <span>{errors?.Password?.message as string}</span>
        <input
          //minLength같이 필요한 값도 있는 경우 object형식으로 값과 메세지를 같이 담을 수 있다.
          {...register("PasswordConf", {
            required: "passwordConf is required",
            minLength: { value: 5, message: "your password is too short" },
          })}
          placeholder="PasswordConf"
        />
        <span>{errors?.PasswordConf?.message as string}</span>
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
