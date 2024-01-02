import Image from "next/image";
import styles from "./singlePost.module.css";
import { getSinglePost } from "@/libs/data";
import { Suspense } from "react";
import PostUser from "@/components/PostUser/PostUser";

//FECTH DATA WITH API REQUEST
const getPost = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`);

  if (!res.ok) {
    throw new Error("Something went wrong!");
  }

  return res.json();
};

// METADATA FOR SEO
export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const post = await getSinglePost(slug);

  return {
    title: post.title,
    description: post.desc,
  };
};

const SinglePostPage = async ({ params }) => {
  const { slug } = params;

  // FETCH DATA WITH API
  const post = await getPost(slug);

  // FETCH DATA WITHOUT API
  // const post = await getSinglePost(slug);
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        {post.img && (
          <Image
            src={post.img}
            fill
            alt="single post image"
            className={styles.img}
          />
        )}
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.details}>
          <Suspense fallback={<div>Loading</div>}>
            <PostUser userId={post.userId} />
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {post.createdAt.toString().slice(4, 16)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
