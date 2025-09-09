import Image from "next/image";
import { Icon } from "@iconify/react";
import styles from "../styles/header.module.css";
import { IconBrandX } from '@tabler/icons-react';

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
                <h1 className={styles.headline} >Hey, I'm Jayden Quaynor.</h1>
                <p className={styles.subline}>  I'm a Web Designer, Music Artist & Photographer. I spend most of time thinking about Tea.</p>
            </div>
   
          
            <div className={styles.socialIcons}>
            <a href="https://placeholder.com" target="_blank" rel="noopener noreferrer">
              <Icon icon="streamline-logos:x-twitter-logo-block" width="24" height="24" />
            </a>
            <a href="https://placeholder.com" target="_blank" rel="noopener noreferrer">
              <Icon icon="ri:instagram-fill" width="24px" height="24px" />
            </a>
            <a href="https://placeholder.com" target="_blank" rel="noopener noreferrer">
              <Icon icon="uil:linkedin" width="24" height="24" />
            </a>
            <a href="https://placeholder.com" target="_blank" rel="noopener noreferrer">
              <Icon icon="mdi:github" width="24" height="24" />
            </a>
            <a href="https://placeholder.com" target="_blank" rel="noopener noreferrer">
              <Icon icon="fa6-solid:paper-plane" width="24" height="24" />
            </a>
            </div>
            </div>  


        </header>
    )
}