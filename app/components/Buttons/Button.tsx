import styles from "../../styles/button.module.css"
import { Icon } from "@iconify/react";

interface ButtonProps {
    cta: string
    backgroundColor: string
    backgroundColorHover: string
    textColor: string
}

export default function Button({cta, backgroundColor, backgroundColorHover, textColor}: ButtonProps){

return(
    <button 
        className={styles.btn} 
        style={{ 
            backgroundColor: backgroundColor,
            color: textColor,
            '--hover-bg': backgroundColorHover
        } as React.CSSProperties}
    >
        {cta}
        <Icon className={styles.arrow} icon="majesticons:arrow-up" width="14" height="14" />
    </button>
)
}