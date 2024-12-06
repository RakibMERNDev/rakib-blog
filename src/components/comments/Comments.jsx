"use client";
import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";
import { useSession } from "next-auth/react";
import useSWR from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
};

const Comments = ({ postSlug }) => {
  const { status } = useSession();

  const { data, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_UR}/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  console.log(data)

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>

      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="Write a comment..."
            className={styles.input}
          ></textarea>
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login" className={styles.login}>
          Login to write a comment
        </Link>
      )}
      <div className={styles.comments}>
        {isLoading
          ? " loading"
          : data?.map((comment) => (
              <div key={comment._id} className={styles.comment}>
                <div className={styles.user}>
                  {comment?.user?.image && (
                    <Image
                      src={comment.user.image}
                      alt=""
                      width={50}
                      height={50}
                      className={styles.image}
                    />
                  )}

                  <div className={styles.userInfo}>
                    <span className={styles.username}>{comment.user.name}</span>
                    <span className={styles.date}>{comment.createdAt}</span>
                  </div>
                </div>
                <p className={styles.desc}>{comment.desc}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Comments;
