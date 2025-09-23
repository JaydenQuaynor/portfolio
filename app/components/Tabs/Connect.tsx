import Image from "next/image";
import { Icon } from "@iconify/react";
import styles from "../../styles/connect.module.css";
import { IconBrandX } from '@tabler/icons-react';

export default function Connect() {
    return (
        <header className={styles.connectHeader}>
            <ul className={styles.connectList}>
                <li className={styles.connectListItem}>
                    <Icon icon="streamline-logos:x-twitter-logo-block" width="24" height="24" />
                    <span className={styles.platformName}>X (Twitter)</span>
                    <span className={styles.handle}>@jaydenQuaynor</span>
                </li>
                <li className={styles.connectListItem}>
                    <Icon icon="ri:instagram-fill" width="24px" height="24px" />
                    <span className={styles.platformName}>Instagram</span>
                    <span className={styles.handle}>@jaydenQuaynor</span>
                </li>
                <li className={styles.connectListItem}>
                    <Icon icon="uil:linkedin" width="24" height="24" />
                    <span className={styles.platformName}>LinkedIn</span>
                    <span className={styles.handle}>@jaydenQuaynor</span>
                </li>
                <li className={styles.connectListItem}>
                    <Icon icon="mdi:github" width="24" height="24" />
                    <span className={styles.platformName}>GitHub</span>
                    <span className={styles.handle}>@jaydenQuaynor</span>
                </li>
                <li className={styles.connectListItem}>
                    <Icon icon="fa6-solid:paper-plane" width="24" height="24" />
                    <span className={styles.platformName}>Email</span>
                    <span className={styles.handle}>@jaydenQuaynor</span>
                </li>
            </ul>
        </header>
    )
}