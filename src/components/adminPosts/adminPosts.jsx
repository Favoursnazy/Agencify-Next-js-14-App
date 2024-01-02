import { getPosts } from "@/libs/data";
import styles from "./adminPost.module.css";
import Image from "next/image";
import { deletPost } from "@/libs/actions";

const AdminPosts = async () => {
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      <h1>Posts</h1>
      {posts.length > 0 &&
        posts.map((post) => (
          <div className={styles.post} key={post.id}>
            <div className={styles.details}>
              <Image
                src={post.img || "/noavatar.png"}
                alt=""
                height={50}
                width={50}
              />
              <span className={styles.postTitle}>{post.title}</span>
            </div>
            <form action={deletPost}>
              <input type="hidden" name="id" value={post.id} />
              <button className={styles.postButton}>Delete</button>
            </form>
          </div>
        ))}
    </div>
  );
};

export default AdminPosts;
