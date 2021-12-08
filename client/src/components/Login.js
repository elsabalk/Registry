import { useState } from "react";
import { useForm } from "react-hook-form";
import Headers from "./LoginHeader.js";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");
  const onSubmit = () => {
    window.location = './registry';
  }

  return (
    <form onSubmit={handleSubmit(onSubmit) } >
      <Headers />
      <input {...register("firstName")} placeholder="Username" required />
      <input {...register("lastName")} placeholder="Password" required />
      <input type="submit" />
    </form>
  );
}