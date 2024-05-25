import Image from "next/image";
import styles from "./page.module.css";
import { getPet } from "@/src/apis/pet";

export default async function Home() {
  const data = await getPet(1);
  return (
    <main className={styles.main}>
      <div>name: {data?.data.name}</div>
    </main>
  );
}
