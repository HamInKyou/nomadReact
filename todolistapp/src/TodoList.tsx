import React from "react";
import { useForm } from "react-hook-form";

interface IForm {
  email: string;
  firstName: string;
  lastName?: string;
  userName: string;
  password: string;
  passwordConf: string;
  extraError?: string; //input항목에 종속적이지 않은, form 전체에 해당하는 에러 설정하기 위해
}

function ToDoList() {
  //register는 input요소를 Form에 등록시키는 함수, input에 대한 name, 이벤트 핸들러 등 리턴
  //formState는 form 상태에 대한 object
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError, //에러를 발생시켜준다.
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  const onValid = (data: IForm) => {
    if (data.password !== data.passwordConf) {
      //에러를 발생시켜줬다!
      return setError("passwordConf", { message: "password are not same" });
    }
    //폼 전체에 해당하는 에러를 발생시켰다.
    setError("extraError", { message: "server offline" });
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
        <span>{errors?.email?.message}</span>
        <input
          {...register("firstName", { required: "First Name is required" })}
          placeholder="First Name"
        />
        <span>{errors?.firstName?.message}</span>
        <input {...register("lastName")} placeholder="Last Name" />
        <span>{errors?.lastName?.message}</span>
        <input
          // 최소 10글자 이상 되게 validation 주는 방법
          {...register("userName", {
            required: "Username is required",
            minLength: 10,
          })}
          placeholder="Username"
        />
        <span>{errors?.userName?.message}</span>
        <input
          //validation 속성에 그 속성에 대한 에러메세지 넣을 수 있다.
          {...register("password", {
            required: "password is required",
            minLength: 5,
          })}
          placeholder="Password"
        />
        <span>{errors?.password?.message}</span>
        <input
          //minLength같이 필요한 값도 있는 경우 object형식으로 값과 메세지를 같이 담을 수 있다.
          {...register("passwordConf", {
            required: "passwordConf is required",
            minLength: { value: 5, message: "your password is too short" },
          })}
          placeholder="PasswordConf"
        />
        <span>{errors?.passwordConf?.message}</span>
        <button>Add</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
}

export default ToDoList;
