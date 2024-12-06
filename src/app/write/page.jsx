"use client";
import Image from "next/image";
import styles from "./write.module.css";
import "react-quill/dist/quill.bubble.css";
import ReactQuill from "react-quill";
import { useEffect, useState } from "react";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [uploading,setUploading] = useState(false);


  const router = useRouter();
  const { status } = useSession();

  const [file, setFile] = useState(null);


  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      setUploading(true);
      const res = await fetch(`https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API}`, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setUploading(false);
      return data.data.url;
    } catch (error) {
      console.error("Error uploading image:", error);
      setUploading(false);
      return null;
    }
  };

  useEffect(() => {
    const upload = async () => {
      if (file) {
        const imageUrl = await uploadImage(file);
        if (imageUrl) {
          console.log("Image uploaded successfully:", imageUrl);
          // You can now use the imageUrl in your post
        }
      }
    };

    upload();
  }, [file]);



  useEffect(() => {
    if (status === "notauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }





  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" className={styles.input} />
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image src="/plus.png" alt="" width={16} height={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <input
              type="file"
            
              id="image"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
            <button className={styles.addButton}>
            <label htmlFor="image">
              <Image src="/image.png" alt="" width={16} height={16} />
            </label>
            </button>
            <button className={styles.addButton}>
              <Image src="/external.png" alt="" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src="/video.png" alt="" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
          className={styles.textArea}
        />
      </div>
      <button className={styles.publish}>Publish</button>
    </div>
  );
};

export default WritePage;
