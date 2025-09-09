import { Icon } from "@iconify/react";
import styles from "../../styles/stack.module.css"

export default function StackCard(){



    return(

        <div className={styles.box}>
            <span className={styles.arrowbox}>
            <Icon className={styles.arrow} icon="bitcoin-icons:arrow-up-outline" width="16" height="16" />
            </span>
            <div className={styles.contentBox}>
            <img
                src="/images/pic.avif"
                alt="logo"
                className={styles.pfp}
                />
            <h1 className={styles.name}>Framer</h1>
            </div>
            
        </div>



    )
}