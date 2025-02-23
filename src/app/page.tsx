"use client";

import styles from "./page.module.css";
import { ImFilesEmpty } from "react-icons/im";
import { VscGithub, VscFiles } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
import { LuMailPlus } from "react-icons/lu";

import { useState, useEffect, useRef } from "react";


export default function Home() {
  const [isSelected, setIsSelected] = useState(false)
// const[isOpen, setIsOpen] = useState(false);
// const dropdownRef = useRef(null);

// const toggleDropdown = () => {
//   setIsOpen((prev) => !prev);
// };

// useEffect(() => {
//   const handleClickOutside = (event: MouseEvent) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setIsOpen(false);
//     }
//   };

//   document.addEventListener('mosuedown', handleClickOutside);
//   return () => document.removeEventListener("mosuedown", handleClickOutside);
// }, []);

  return (
    <div  className={styles.page}>
      <div className ={styles.nav}>
          <div className ={styles.leftNav}>
            <img src={"images/logo.png"} alt="Logo" style={{ width: '30px', height: 'auto'}} />

            <button className={styles.buttonNav}>File</button>

            <div className={styles.dropdown}>
              <button>
                
                Projects
              </button>
              {/* {isOpen && (  */}
              <div className={styles.dc}>   
                <a >Synczone</a>
                <a >Portfolio</a>
                
              </div>
              {/* )} */}
            </div>
            <div className={styles.dropdown}>
              <button>
                
                Socials
              </button>
              {/* {isOpen && (  */}
              <div className={styles.dc}>   
                <a >LinkedIn</a>
                <a >Github</a>
                <a >Instagram</a>
                
              </div>
              {/* )} */}
            </div>

            <button>About</button>

            
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
            <VscFiles  style={{ color: 'rgb(114 118 126)',fontSize: '45px' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "rgb(215 218 224)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "grey")}/>
          </button>
          <button>
            <LuMailPlus  style={{ color: 'rgb(114 118 126)',fontSize: '40px' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "rgb(215 218 224)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "grey")}/>
          </button>
          <button>
            <FaLinkedin  style={{ color: 'rgb(114 118 126)',fontSize: '40px' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "rgb(215 218 224)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "grey")}/>
          </button>
          <button>
            <VscGithub  style={{ color: 'rgb(114 118 126)',fontSize: '40px' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "rgb(215 218 224)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "grey")}/>
          </button>
          
        </div>
        <div className ={styles.mainBody}>

          <div className ={styles.topBar}> 
            <div className ={styles.exploreBox}>
              <p className ={styles.explorer}>
                EXPLORER
              </p>
            </div>
          </div>
          
          <div className ={styles.bottomBody}>

            <div className ={styles.leftBody}>

            </div>

            <div className ={styles.rightBody}>
              <div className ={styles.directory}></div>
              <div className ={styles.code}>
                <code style={{fontSize: '25px', color: ' rgb(172, 173, 180)'}}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque mollitia pariatur, accusantium sit laboriosam atque qui asperiores porro placeat illo! Vitae quis nisi magni commodi a, suscipit aliquam deserunt unde.
                </code>
              </div>
              <div className ={styles.terminal}> 
                <div className ={styles.tab}>
                  <button>PROBLEMS</button>
                  <button>OUTPUT</button>
                  <button>DEBUG CONSOLE</button>
                  <button className ={styles.term}>TERMINAL</button>
                  <button>PORTS</button>
                  <button>COMMENTS</button>

                </div>
                <div className ={styles.cd}>
                  <code className ={styles.cdText}
                  >C:\Users\Darren Nguyen\my_projects\Synczone
                  </code>
                  
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
