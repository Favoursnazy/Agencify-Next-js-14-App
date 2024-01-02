import Image from "next/image";
import styles from "./postcard.module.css";
import Link from "next/link";

function PostCard({ post }) {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          {post.img && (
            <Image src={post.img} fill className={styles.img} alt="" />
          )}
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.desc}</p>
        <Link href={`/blog/${post.slug}`}>READ MORE</Link>
      </div>
    </div>
  );
}

export default PostCard;
