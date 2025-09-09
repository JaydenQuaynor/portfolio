import styles from "../../styles/servicecard.module.css"

interface ServiceCardProps {

    serviceNumber : string
    serviceTitle : string
    serviceDescription : string
}

export default function ServiceCard({ serviceNumber, serviceTitle, serviceDescription} : ServiceCardProps){

    return(

        <div className={styles.box}>
            <div className={styles.contentContainer}>
             <div className={styles.titleContainer}>
            <h1 className={styles.number}>{serviceNumber}</h1>
            <h1 className={styles.title}>{serviceTitle}</h1>
            </div>   
           <div className={styles.descriptionContainer}> <p className={styles.subline}>{serviceDescription}</p></div>
           </div>
        </div>
        
    )
}