import { useState } from "react";
import { useForm } from "react-hook-form";
import Headers from "./LoginHeader.js";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");
  const onSubmit = (data) => setResult(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Headers />
      <input {...register("firstName")} placeholder="Username" />
      <input {...register("lastName")} placeholder="Password" />
      <input type="submit" />
    </form>
  );
}