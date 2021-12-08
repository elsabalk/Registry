import { useState } from "react";
import { useForm } from "react-hook-form";
import AccountHeader from "./AccountCreateHeader";

export default function AccountCreate() {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");
  const onSubmit = (data) => setResult(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <AccountHeader />
      <input {...register("firstName")} placeholder="First Name" required/>
      <input {...register("lastName")} placeholder="Last Name" required/>
      <input {...register("email")} placeholder="Email Address" required/>
      <input {...register("username")} placeholder="Username" required/>
      <input type="password" {...register("password")} placeholder="Password" required/>
      <input type="submit" />
    </form>
  );
}
