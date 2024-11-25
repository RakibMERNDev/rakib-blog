import Menu from "@/components/Menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
            similique.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Jhon Doe</span>
              <span className={styles.date}>24.11.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              quae nisi adipisci, quaerat magni eius deleniti officiis et
              repellendus quas laboriosam tempore incidunt sequi nemo commodi
              dolorem non molestiae inventore.
            </p>
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              ducimus!
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              quae nisi adipisci, quaerat magni eius deleniti officiis et
              repellendus quas laboriosam tempore incidunt sequi nemo commodi
              dolorem non molestiae inventore.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              quae nisi adipisci, quaerat magni eius deleniti officiis et
              repellendus quas laboriosam tempore incidunt sequi nemo commodi
              dolorem non molestiae inventore.
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
