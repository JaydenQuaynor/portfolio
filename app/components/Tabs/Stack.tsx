import StackCard from "../Cards/StackCard";
import styles from "../../styles/stack.module.css"

export default function Stack(){


    return(

        <div className={styles.grid}>
            <StackCard
            logo="/images/Stack logos/next-js.svg"
            companyName="Next.Js"
            url=""
            />
            <StackCard
            logo="/images/Stack logos/Figma-logo.svg.png"
            companyName="Figma"
            url=""
            />
            <StackCard
            logo="/images/Stack logos/TvJ9grdPgk3sRz6T6XwkpBrFr4k.avif"
            companyName="Framer"
            url=""
            />
            <StackCard
            logo="/images/Stack logos/GitHub-Mark-ea2971cee799.png"
            companyName="Github"
            url=""
            />
            <StackCard
            logo="/images/Stack logos/Tailwind_CSS_Logo.svg.png"
            companyName="Tailwind CSS"
            url=""
            />
            <StackCard
            logo="/images/Stack logos/React-icon.svg.png"
            companyName="React"
            url=""
            />
            <StackCard
            logo="/images/Stack logos/expo-go-app.svg"
            companyName="Expo"
            url=""
            />


        </div>
    )
}