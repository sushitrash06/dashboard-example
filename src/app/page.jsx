import Image from "next/image";
import styles from "./page.module.css";
import LoginPage from "./Page/Login";

export default function Home() {
  return (
    <main className={styles.main}>
     <LoginPage/>
    </main>
  );
}
