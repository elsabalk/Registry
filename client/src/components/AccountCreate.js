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
      <input {...register("firstName")} placeholder="First Name" />
      <input {...register("lastName")} placeholder="Last Name" />
      <input {...register("email")} placeholder="Email Address" />
      <input {...register("username")} placeholder="Username" />
      <input type="password" {...register("password")} placeholder="Password" />

      <p>{result}</p>
      <input type="submit" />
    </form>
  );
}
