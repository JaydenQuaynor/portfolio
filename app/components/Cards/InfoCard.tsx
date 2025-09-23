import styles from "../../styles/infocard.module.css";
import Image from "next/image";
import { Icon } from "@iconify/react";

interface InfoCardProps {
    logo: string;
    logoAlt: string;
    title: string;
    description: string;
    buttonText: string;
    buttonUrl: string;
    mainImage: string;
    mainImageAlt: string;
  }


export default function InfoCard({
    logo,
    logoAlt,
    title,
    description,
    buttonText,
    buttonUrl,
    mainImage,
    mainImageAlt
  }: InfoCardProps){
    return(
        <div className={styles.wrapper}>
            <div className={styles.box}>
                <div className={styles.contentContainer}>
                    <div className={styles.content}>

                        <div className={styles.tophead}>
                       <div className={styles.imageContainer}> 
                            <img className={styles.headshot}
                                src={logo} 
                                alt={logoAlt} 
                                width={36} 
                            />

              
                        </div>

                        <div className={styles.borderBox}>
                                <p className={styles.statusTag}>Live</p>
                            </div>

                            </div>
                        <h1 className={styles.title}>{title}</h1>
                        <p className={styles.subline}>{description}</p>
                        <a href={buttonUrl} className={styles.btn}>
                            {buttonText}
                            <Icon className={styles.arrow} icon="majesticons:arrow-up" width="14" height="14" />
                        </a>
                    </div>
                    <div>
                        <img className={styles.img} src={mainImage} alt={mainImageAlt} />
                    </div>
                </div>
            </div>
        </div>
    )
}