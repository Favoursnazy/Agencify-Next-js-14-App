import { getAllUsers } from "@/libs/data";
import styles from "./adminusers.module.css";
import Image from "next/image";
import { deleteUser } from "@/libs/actions";

const AdminUsers = async () => {
  const users = await getAllUsers();
  return (
    <div className={styles.container}>
      <h1>Users</h1>
      {users.length > 0 &&
        users.map((user) => (
          <div className={styles.user} key={user.id}>
            <div className={styles.details}>
              <Image
                src={user.img || "/noavatar.png"}
                alt=""
                height={50}
                width={50}
              />
              <span className={styles.postTitle}>{user.username}</span>
            </div>
            <form action={deleteUser}>
              <input type="hidden" name="id" value={user.id} />
              <button className={styles.userButton}>Delete</button>
            </form>
          </div>
        ))}
    </div>
  );
};

export default AdminUsers;
