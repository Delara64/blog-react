import Link from "next/link";
import styles from "../styles/BacktoHome.module.css";

const BacktoHome = () => {
  return (
    <div>
      <ul className={styles.list}>
        <li>
          <Link href="/" legacyBehavior>
            <a className={styles.link}>Back to Home</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default BacktoHome;
