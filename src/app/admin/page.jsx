import { Suspense } from "react";
import styles from "./admin.module.css";
import AdminPostForm from "@/components/adminPostForm/adminPostForm";
import AdminPosts from "@/components/adminPosts/adminPosts";
import AdminUsers from "@/components/adminUsers/adminUsers";
import AdminUserForm from "@/components/adminUserForm/adminUserForm";
import { auth } from "@/libs/auth";

const AdminPage = async () => {
  const session = await auth();
  return (
    <div className={styles.container}>
      <div className={styles.rows}>
        <div className={styles.cols}>
          <Suspense fallback={<div>Loading</div>}>
            <AdminPosts />
          </Suspense>
        </div>
        <div className={styles.cols}>
          <AdminPostForm userId={session?.user?.id} />
        </div>
      </div>
      <div className={styles.rows}>
        <div className={styles.cols}>
          <Suspense fallback={<div>Loading</div>}>
            <AdminUsers />
          </Suspense>
        </div>
        <div className={styles.cols}>
          <AdminUserForm />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
