"use client";
import Image from "next/image";
import styles from "./write.module.css";
import 'react-quill/dist/quill.bubble.css';
import ReactQuill from "react-quill";
import { useState } from "react";


const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" />
      <div className={styles.editor}>
        <button className={styles.button} onClick={()=>setOpen(!open)}>
          <Image src="/plus.png" alt="" width={16} height={16} />
        </button>
        {open && (
          <>
            <div className={styles.addButton}>
              <Image src="/image.png" alt="" width={16} height={16} />
            </div>
            <div className={styles.addButton}>
              <Image src="/external.png" alt="" width={16} height={16} />
            </div>
            <div className={styles.addButton}>
              <Image src="/video.png" alt="" width={16} height={16} />
            </div>
          </>
        )}
        <ReactQuill theme="bubble" value={value} onChange={setValue} placeholder="Tell your story..." />
      </div>
    </div>
  );
};

export default WritePage;
