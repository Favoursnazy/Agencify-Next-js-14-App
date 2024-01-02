import PostCard from "@/components/postCard/PostCard";
import styles from "./blog.module.css";

// FETCH DATA WITH AND API
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/posts", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const BlogPage = async () => {
  // FERCH DATA WITHOUT API
  // const posts = await getPosts();

  // FETCH DATA WITH API
  const posts = await getData();

  return (
    <div className={styles.container}>
      {posts &&
        posts.map((post) => (
          <div key={post._id} className={styles.post}>
            <PostCard post={post} />
          </div>
        ))}
    </div>
  );
};

export default BlogPage;
