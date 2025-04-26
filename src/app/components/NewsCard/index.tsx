"use client";

import Link from "next/link";
import Image from "next/image";
import { NewsItem } from "../../data/types";
import styles from "./styles.module.css";

interface NewsCardProps {
    news: NewsItem;
}

export default function NewsCard({ news }: NewsCardProps) {
    const firstImage = news.attachments?.find(
        (a) =>
            (a.type === "PHOTO" || a.type === "LINK") && a.image?.src
    )?.image;

    const fallbackImage = "https://images.techinsider.ru/upload/img_cache/aac/aacbbe0ebbeb260080c7e4706e13fc2b_cropped_320x320.webp";

    return (
        <Link href={`/news/${news.id}`} className={styles.card} scroll={false}>
            <div className={styles.imageWrapper}>
                <Image
                    src={firstImage?.src || fallbackImage}
                    alt="Изображение новости"
                    width={400}
                    height={250}
                    className={styles.image}
                />
            </div>

            <div className={styles.type}>{news.type.replace("Вика_", "")}</div>

            <h3 className={styles.title}>{news.text.split("\n")[0]}</h3>

            <time className={styles.date}>
                {new Date(news.date * 1000).toLocaleDateString("ru-RU", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                })}
            </time>
        </Link>
    );
}

