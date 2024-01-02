"use client";
import { addPost } from "@/libs/actions";
import styles from "./adminpostform.module.css";
import { useFormState } from "react-dom";

const AdminPostForm = ({ userId }) => {
  const [state, formAction] = useFormState(addPost, undefined);
  return (
    <form action={formAction} className={styles.container}>
      <h1>Add New Post</h1>
      <input type="text" name="title" placeholder="Post Title" />
      <input
        type="hidden"
        name="userId"
        placeholder="Title"
        value={userId}
        readOnly
      />
      <input type="text" name="slug" placeholder="Post Slug" />
      <input type="text" name="img" placeholder="Post Image" />
      <textarea
        rows={10}
        type="text"
        name="desc"
        placeholder="Post Decription"
      />
      <button>Add Post</button>
      {state && state.error}
    </form>
  );
};

export default AdminPostForm;
