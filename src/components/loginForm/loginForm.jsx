"use client";
import { loginWithCredentials, registerUser } from "@/libs/actions";
import styles from "./loginform.module.css";
import { useFormState } from "react-dom";
// import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

function LoginForm() {
  const [state, formAction] = useFormState(loginWithCredentials, undefined);
  const router = useRouter();

  //   useEffect(() => {
  //     state?.success && router.push("/login");
  //   }, [state?.success, router]);

  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="Paswword" name="password" />
      <button>Login</button>
      {state?.error}
      <Link href="/register">{"Don't have an account?"}Register</Link>
    </form>
  );
}

export default LoginForm;
