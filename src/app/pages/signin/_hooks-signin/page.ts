import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function useSignIn() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
  const isEmailValid = emailRegex.test(form.email);
  const isPasswordValid = passwordRegex.test(form.password);
  const navigate = useNavigate();

  function handleLogin() {
    if (!isEmailValid || !isPasswordValid) {
      alert("Por favor, insira um email e senha válidos.");
      return;
    } else {
      console.log("Dados", form);
      navigate("/home");
    }
  }

  return {
    form,
    setForm,
    isEmailValid,
    isPasswordValid,
    handleLogin,
  };
}

export function useForgotPassword() {
  const [form, setForm] = useState({
    email: "",
  });

  const navigate = useNavigate();

  function handleForgotPassword(e: React.SyntheticEvent) {
    e.preventDefault();
    navigate("/codecheck");
  }

  return {
    form,
    setForm,
    handleForgotPassword,
  };
}

export function useCodeCheck() {
  const [code, setCode] = useState(["", "", "", "", ""]);
  const navigate = useNavigate();

  function handleCodeCheck() {
    const codeString = code.join("");

    if (codeString === "12345") {
      navigate("/resetpassword");
    } else {
      alert("Código incorreto. Por favor, tente novamente.");
    }
  }

  return {
    code,
    setCode,
    handleCodeCheck,
  };
}

export function useSetNewPassword() {
  const [form, setForm] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
  const isPasswordValid = passwordRegex.test(form.newPassword);
  const passwordsMatch = form.newPassword === form.confirmPassword;
  const Navigate = useNavigate();

  function handleSetNewPassword(e: React.SyntheticEvent) {
    e.preventDefault();
    if (!passwordsMatch) return;
    Navigate("/resetsuccessful");
  }

  return {
    form,
    setForm,
    passwordsMatch,
    isPasswordValid,
    handleSetNewPassword,
  };
}
