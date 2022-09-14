import React from "react";
import { useForm } from "react-hook-form";

function ToDoList() {
  //register는 input요소를 Form에 등록시키는 함수, input에 대한 name, 이벤트 핸들러 등 리턴
  //watch는 등록된 input요소들의 변경사항을 객체로 묶어 리턴해주는 함수
  const { register, watch } = useForm();
  console.log(watch());
  return (
    <div>
      <form>
        {/* register 함수를 통해 각 input을 등록해줬다. */}
        <input {...register("email")} placeholder="Email" />
        <input {...register("First Name")} placeholder="First Name" />
        <input {...register("Last Name")} placeholder="Last Name" />
        <input {...register("Username")} placeholder="Username" />
        <input {...register("Password")} placeholder="Password" />
        <input {...register("PasswordConf")} placeholder="PasswordConf" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
