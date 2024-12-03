import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = ({ item }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>22.11.2024 -</span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <h1>{item.title}</h1>
        <p className={styles.desc}>{item.desc}</p>
        <Link href="/post/1" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
