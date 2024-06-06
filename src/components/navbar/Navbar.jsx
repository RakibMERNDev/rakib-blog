import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/twitter.png" alt="twitter" width={24} height={24} />
        <Image src="/linkedin.png" alt="linkedin" width={24} height={24} />
      </div>
      <div className={styles.logo}>RakibBlog</div>
      <div className={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/about">About</Link>
      </div>
    </div>
  );
};

export default Navbar;
