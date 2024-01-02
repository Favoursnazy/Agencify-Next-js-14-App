"use client";
import { addUser } from "@/libs/actions";
import styles from "./adminuserform.module.css";
import { useFormState } from "react-dom";

const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);
  return (
    <form action={formAction} className={styles.container}>
      <h1>Add New User</h1>
      <input type="text" name="username" placeholder="Username" />
      <input type="text" name="email" placeholder="Email" />
      <input type="text" name="img" placeholder="img" />
      <input type="password" name="password" placeholder="Password" />
      <select name="isAdmin" id="">
        <option value="false">Is Admin?</option>
        <option value="false">No</option>
        <option value="true">Yes</option>
      </select>
      <button>Add User</button>
      {state && state.error}
    </form>
  );
};

export default AdminUserForm;
