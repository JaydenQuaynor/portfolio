import StackCard from "../Cards/StackCard";
import styles from "../../styles/stack.module.css"

export default function Stack(){


    return(

        <div className={styles.grid}>
            <StackCard />
            <StackCard />
            <StackCard />
            <StackCard />
            <StackCard />
            <StackCard />
            <StackCard />
        </div>
    )
}