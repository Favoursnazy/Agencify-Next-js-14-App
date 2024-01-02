"use client";
import { registerUser } from "@/libs/actions";
import styles from "./regsiter.module.css";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

function RegisterForm() {
  const [state, formAction] = useFormState(registerUser, undefined);
  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="username" name="username" />
      <input type="text" placeholder="email" name="email" />
      <input type="password" placeholder="Paswword" name="password" />
      <input
        type="password"
        placeholder="confirm password"
        name="cf_password"
      />
      <button>Register</button>
      {state?.error}
      <Link href="/login">Have an account?</Link>
    </form>
  );
}

export default RegisterForm;
