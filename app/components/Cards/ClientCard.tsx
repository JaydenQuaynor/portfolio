import styles from "../../styles/clientcard.module.css"
import { Icon } from "@iconify/react";
import Image from "next/image";


interface ClientCardProps {
    testimonial : string
    logoPfp : string
    clientName : string
    companyName : string
    companyUrl : string

}

export default function ClientCard({testimonial,logoPfp,clientName,companyName,companyUrl}:ClientCardProps){

    return(

        <div className={styles.box}>
 
            
        
            <div className={styles.Container}>
                <span className={styles.icon}><Icon  icon="tabler:quote-filled" width="24" height="24" /></span>
                
                
                
                    <div className={styles.content}>
                        <h1 className={styles.testimonial}>&quot;{testimonial}&quot;</h1>

                        <div className={styles.infoBoxWrapper}>
                        <div className={styles.infoBox}>
                        <Image
                        src={logoPfp}
                        alt="pfp"
                        className={styles.pfp}
                        width={24}
                        height={24}
                        />
                        <h1 className={styles.name}>{clientName}</h1>
                        </div>
                        <a className={styles.link} href={companyUrl}>{companyName}</a>

                    </div>

                </div>

            </div>


        </div>   

        
    )
}