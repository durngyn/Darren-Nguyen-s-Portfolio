"use client";

import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser, faCopy } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Home() {
  const [color, setColor] = useState("grey");
  return (
    <div className={styles.page}>
      <div className ={styles.nav}>
          <div className ={styles.leftNav}>
            <img src={"images/logo.png"} alt="Logo" style={{ width: '40px', height: 'auto'}} />
            <button className={styles.buttonNav}>File</button>
            <button >Projects</button>
            <button>About</button>
            <button>Socials</button>
          </div>
          <div className ={styles.midNav}>
            <div className ={styles.textBox}>
              <img src={"images/mag.png"} alt="Logo"  />
              <h1 className = {styles.title}>Darren Nguyen's Portfolio</h1>
            </div>
          </div>
          <div className ={styles.rightNav}>
            
          </div>
      </div>
      <div className = {styles.body}>
        <div className = {styles.sideBar}>
          <button>
          <FontAwesomeIcon
            icon={faCopy}
            style={{ color: color, fontSize: "40px"}}
            onMouseEnter={() => setColor("blue")} 
            onMouseLeave={() => setColor("grey")}  
          />
          </button>
          <button>
          <FontAwesomeIcon
            icon={faCopy}
            style={{ color: color, fontSize: "40px"}}
            onMouseEnter={() => setColor("blue")} 
            onMouseLeave={() => setColor("grey")}  
          />
          </button> <button>
          <FontAwesomeIcon
            icon={faCopy}
            style={{ color: color, fontSize: "40px"}}
            onMouseEnter={() => setColor("blue")} 
            onMouseLeave={() => setColor("grey")}  
          />
          </button>
          
        </div>

      </div>
    </div>
  );
}
