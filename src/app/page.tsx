"use client";

import styles from "./page.module.css";
import { VscGithub, VscFiles, VscChevronRight } from "react-icons/vsc";
import { FaLinkedin, FaFilePdf } from "react-icons/fa";
import { LuMailPlus } from "react-icons/lu";

import { useState, useEffect, useRef } from "react";


export default function Home() {
  const [isSelected, setIsSelected] = useState(false)

  const [content, setContent] = useState({
    window: <div className ={styles.leftBodyExplorer}>
      <details className ={styles.drop}>
        <summary className ={styles.leftBodyDrop}>
            <VscChevronRight className ={styles.arrow}/> 
            <p>RESUME</p>
        </summary>
        <summary className ={styles.parentSpacing}>
          <div className ={styles.spacing}> </div>
          <div className ={styles.spacingTwo}>    
            <FaFilePdf className ={styles.pdf}/>    
            Resume(2025).pdf       
          </div>
        </summary>
      </details>
      <details className ={styles.drop}>
        <summary className ={styles.leftBodyDrop}>
          <VscChevronRight className ={styles.arrow}/> 
          <p>MY_PROJECTS</p>
        </summary>
        <details className ={styles.drop}>
          <summary className ={styles.parentSpacing}>
            <div className ={styles.spacing}> </div>
            <div className ={styles.spacingTwo}>        
              <VscChevronRight className ={styles.arrow}/>
              Synczone     
            </div>          
          </summary>
          <p>synczone.tsx</p>
          <p>readme.md</p>
        </details>
      </details>
            </div>,
    text: "EXPLORER"
  });

  const [terminal, setTerminal] = useState({
    window: 
    <code className ={styles.cdText}
    >C:\Users\Darren Nguyen\my_projects\Synczone
    </code>
   
  });
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
                <a >Discord</a>
                
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
          <button onClick={() => setContent({
              window: <div className ={styles.leftBodyExplorer}>
              <details className ={styles.drop}>
                <summary className ={styles.leftBodyDrop}>
                    <VscChevronRight className ={styles.arrow}/> 
                    <p>RESUME</p>
                </summary>
                <summary className ={styles.parentSpacing}>
                  <div className ={styles.spacing}> </div>
                  <div className ={styles.spacingTwo}>        
                    Resume(2025).pdf       
                  </div>
                </summary>
              </details>
              <details className ={styles.drop}>
                <summary className ={styles.leftBodyDrop}>
                  <VscChevronRight className ={styles.arrow}/> 
                  <p>MY_PROJECTS</p>
                </summary>
                <details className ={styles.drop}>
                  <summary className ={styles.parentSpacing}>
                    <div className ={styles.spacing}> </div>
                    <div className ={styles.spacingTwo}>        
                      <VscChevronRight className ={styles.arrowTwo}/>
                      Synczone     
                    </div>          
                  </summary>
                  <p>synczone.tsx</p>
                  <p>readme.md</p>
                </details>
              </details>
                    </div>,
            text: "EXPLORER"
          })}>
            <VscFiles  style={{ color: 'rgb(114 118 126)',fontSize: '45px' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "rgb(215 218 224)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "grey")}/>
          </button>
          <button onClick={() => setContent({
             window: <div className ={styles.leftBodyMail}>

             </div>,
             text: "EMAIL"
          })}>
            <LuMailPlus  style={{ color: 'rgb(114 118 126)',fontSize: '40px' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "rgb(215 218 224)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "grey")}/>
          </button>
          <button onClick={() => setContent({
             window: <div className ={styles.leftBodyIn}>
             </div>,
             text: "LINKEDIN"
          })}>
            <FaLinkedin  style={{ color: 'rgb(114 118 126)',fontSize: '40px' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "rgb(215 218 224)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "grey")}/>
          </button>
          <button onClick={() => setContent({
             window: <div className ={styles.leftBodyGithub}>
              <iframe src="https://www.rapidtables.com/convert/color/hex-to-rgb.html?hex=acafb5"></iframe>
             </div>,
             text: "GITHUB"
          })}>
            <VscGithub  style={{ color: 'rgb(114 118 126)',fontSize: '40px' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "rgb(215 218 224)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "grey")}/>
          </button>
          
        </div>
        <div className ={styles.mainBody}>

          <div className ={styles.topBar}> 
            <div className ={styles.exploreBox}>
              <p className ={styles.explorer}>
                {content.text}
              </p>
            </div>
          </div>
          
          <div className ={styles.bottomBody}>

            {content.window}

            <div className ={styles.rightBody}>
              <div className ={styles.directory}>
                <p>Resume</p>
              </div>
              <div className ={styles.code}>

                <div className ={styles.topCode}> 
                  <div className ={styles.name}>
                    <h1> Synczone</h1>
                  </div>
                  <code className ={styles.desc}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, voluptate doloremque eaque distinctio nesciunt voluptas inventore numquam explicabo officiis tempore perspiciatis quas eveniet natus tempora necessitatibus eos, atque ad et.
                  </code>
                </div>
                

                <div className ={styles.bottomCode}> 
                  <img src={"images/winston.jpg"} style={{ width: '600px', height: 'auto'}}/>
                </div>                        
              </div>
              <div className ={styles.terminal}> 
                <div className ={styles.tab}>
                  <button onClick={() => setTerminal({
                  window: <code> </code> })}>
                  PROBLEMS
                  </button>
                  <button onClick={() => setTerminal({
                  window: <code></code>
                  })}>OUTPUT</button>
                  <button onClick={() => setTerminal({
                  window: <code></code>
                  })}>DEBUG CONSOLE</button>
                  <button onClick={() => setTerminal({
                  window: <code className ={styles.cdText}
                  >C:\Users\Darren Nguyen\my_projects\Synczone
                  </code>
                  
                  })} className ={styles.term}>TERMINAL</button>
                  <button onClick={() => setTerminal({
                  window: <code></code>
                  })}>PORTS</button>
                  <button onClick={() => setTerminal({
                  window: <code></code>
                  })}>COMMENTS</button>

                </div>
                <div className ={styles.cd}>
                  {terminal.window}
                  
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
