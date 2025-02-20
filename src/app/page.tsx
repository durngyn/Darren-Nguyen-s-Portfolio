import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div 
        style={{
          width: 100,
          height:100,
          backgroundColor: "orange"
        }}>
          
        </div>
        <div 
        style={{
          width: 100,
          height:100,
          backgroundColor: "orange"
        }}>
          
        </div>
      
    </div>
  );
}
