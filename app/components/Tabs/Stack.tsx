import StackCard from "../Cards/StackCard";
import styles from "../../styles/stack.module.css"

export default function Stack(){


    return(

        <div className={styles.grid}>
            <StackCard
            logo="/images/Stack logos/next-js.svg"
            companyName="Next.Js"
            url="https://nextjs.org/"
            />
            <StackCard
            logo="/images/Stack logos/Figma-logo.svg.png"
            companyName="Figma"
            url="https://www.figma.com/"
            />
            <StackCard
            logo="/images/Stack logos/TvJ9grdPgk3sRz6T6XwkpBrFr4k.avif"
            companyName="Framer"
            url="https://www.framer.com/"
            />
            <StackCard
            logo="/images/Stack logos/GitHub-Mark-ea2971cee799.png"
            companyName="Github"
            url="https://github.com/"
            />
            <StackCard
            logo="/images/Stack logos/Tailwind_CSS_Logo.svg.png"
            companyName="Tailwind CSS"
            url="https://tailwindcss.com/"
            />
            <StackCard
            logo="/images/Stack logos/React-icon.svg.png"
            companyName="React"
            url="https://react.dev/"
            />
            <StackCard
            logo="/images/Stack logos/expo-go-app.svg"
            companyName="Expo"
            url="https://expo.dev/"
            />


        </div>
    )
}