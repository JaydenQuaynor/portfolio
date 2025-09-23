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
    status: "live" | "design" | "inactive";
  }


export default function InfoCard({
    logo,
    logoAlt,
    title,
    description,
    buttonText,
    buttonUrl,
    mainImage,
    mainImageAlt,
    status
  }: InfoCardProps){
    const statusLabel = status === "live" ? "Live" : status === "design" ? "Design" : "Inactive";
    const statusClass = status === "live" ? styles.statusLive : status === "design" ? styles.statusDesign : styles.statusInactive;
    return(
        <div className={styles.wrapper}>
            <div className={styles.box}>
                <div className={styles.contentContainer}>
                    <div className={styles.content}>

                        <div className={styles.tophead}>
                       <div className={styles.imageContainer}> 
                           <Image className={styles.headshot}
                                src={logo} 
                                alt={logoAlt} 
                                width={36}
                                height={36}
                            />

              
                        </div>

                        <div className={`${styles.borderBox} ${statusClass}`}>
                                <p className={styles.statusTag}>{statusLabel}</p>
                            </div>

                            </div>
                        <h1 className={styles.title}>{title}</h1>
                        <p className={styles.subline}>{description}</p>
                        <a href={buttonUrl} className={styles.btn} target="_blank" rel="noopener noreferrer">
                            {buttonText}
                            <Icon className={styles.arrow} icon="majesticons:arrow-up" width="14" height="14" />
                        </a>
                    </div>
                    <div>
                        <Image className={styles.img} src={mainImage} alt={mainImageAlt} width={800} height={400} />
                    </div>
                </div>
            </div>
        </div>
    )
}