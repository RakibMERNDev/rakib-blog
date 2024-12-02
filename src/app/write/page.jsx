import Image from "next/image";
import styles from "./write.module.css";
const WritePage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" />
      <div className={styles.editor}>
        <button className={styles.button}>
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
      </div>
    </div>
  );
};

export default WritePage;
