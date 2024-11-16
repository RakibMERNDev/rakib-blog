import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>22.11.2024 -</span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <h1>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla,
          veritatis?
        </h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint delectus
          ex inventore recusandae ipsam cupiditate placeat saepe quae. Nostrum
          delectus deleniti aut facere ipsum labore magnam possimus voluptatum
          animi aspernatur.
        </p>
        <Link href="/post/1" className={styles.link}>Read More</Link>
      </div>
    </div>
  );
};

export default Card;
