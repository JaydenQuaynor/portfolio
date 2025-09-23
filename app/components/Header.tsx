import Image from "next/image";
import { Icon } from "@iconify/react";
import styles from "../styles/header.module.css";

export default function Header() {
    return (
        <header className="mb-[5em]">
            <div className={styles.wrapper}>
           <div className="headshot-wrapper">
           <Image 
           className={styles.headshot}
            src="/images/headshot.jpg" 
            alt="Site logo" 
            width={60} 
            height={48} 
            />
    
            </div> 

            <div className={styles.intro}>
                <h1 className={styles.headline} >Hey, I&apos;m Jayden Quaynor.</h1>
                <p className={styles.subline}>I’m an Entrepreneur, Web Designer & Developer. I spend most of my time bringing ideas to life on the web.</p>
            </div>
   
          
            <div className={styles.socialIcons}>
            <a href="https://x.com/Quaynor1k" target="_blank" rel="noopener noreferrer">
              <Icon icon="streamline-logos:x-twitter-logo-block" width="24" height="24" />
            </a>
            <a href="https://www.instagram.com/jaydenquaynor/" target="_blank" rel="noopener noreferrer">
              <Icon icon="ri:instagram-fill" width="24px" height="24px" />
            </a>
            <a href="https://www.linkedin.com/in/jayden-quaynor-874ab8256/" target="_blank" rel="noopener noreferrer">
              <Icon icon="uil:linkedin" width="24" height="24" />
            </a>
            <a href="https://github.com/JaydenQuaynor" target="_blank" rel="noopener noreferrer">
              <Icon icon="mdi:github" width="24" height="24" />
            </a>
            <a href="https://www.youtube.com/@Quaynor" target="_blank" rel="noopener noreferrer">
              <Icon icon="mdi:youtube" width="24" height="24" />
            </a>
            </div>
            </div>  


        </header>
    )
}