"use client"
import styles from "../styles/tabs.module.css";
import {useState} from "react";
import Ventures from "./Tabs/Ventures";
import Services from "./Tabs/Services";
import Clients from "./Tabs/Clients";
import Stack from "./Tabs/Stack";




export default function Tabs(){


    const [activeTab, setActiveTab] = useState(0)

    const tabs = ["Ventures", "Services", "Clients", "Stack"];

    
    return(

        <div className={styles.tabWrapper}>

            <div className="">
                {tabs.map((tabs, index) => (
                    <button
            
                    className={`${styles.tabButton} ${activeTab === index ? styles.active : ""}`}

                    key={index}
                    onClick={() => setActiveTab(index)}
                    >
                    {tabs}
                    </button>           

                ))}
            </div>
            <div>
        {activeTab === 0 && <Ventures />}
        {activeTab === 1 && <Services />}
        {activeTab === 2 && <Clients />}
        {activeTab === 3 && <Stack />}
        
      </div>


        </div>


    )


}