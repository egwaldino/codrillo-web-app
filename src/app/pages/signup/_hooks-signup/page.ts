import { useState } from "react";

export function useSignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

  const isEmailValid = emailRegex.test(form.email);
  const isPasswordValid = passwordRegex.test(form.password);
  const passwordsMatch = form.password === form.confirmPassword;

  function handleSubmit() {
    if (!passwordsMatch) return;
    console.log("Dados", form);
    alert("Cadastrado com sucesso");

    setForm({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  }

  return {
    form,
    setForm,
    isEmailValid,
    isPasswordValid,
    handleSubmit,
    passwordsMatch,
  }
}
