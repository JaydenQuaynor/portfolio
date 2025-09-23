import { Icon } from "@iconify/react";
import styles from "../../styles/stack.module.css"

interface StackCardProps{

    logo: string,
    companyName: string,
    url: string,
}

export default function StackCard({logo,companyName,url}: StackCardProps){



    return(

        <div className={styles.box}>
            <a href={url}>
            <span className={styles.arrowbox}>
            
            <Icon className={styles.arrow} icon="bitcoin-icons:arrow-up-outline" width="16" height="16" />
            
            </span>
            <div className={styles.contentBox}>
            <img
                src={logo}
                alt="logo"
                className={styles.pfp}
                />
            <h1 className={styles.name}>{companyName}</h1>
            </div>

            </a>
            
        </div>



    )
}