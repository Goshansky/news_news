import { notFound } from "next/navigation";
import { getNewsById } from "../../data/newsApi";
import Link from "next/link";
import styles from "./page.module.css";
import { use } from "react";

export const dynamic = "force-dynamic";

export async function generateStaticParams() {
    const news = await import("../../data/news.json");
    return news.default.map((item) => ({ id: item.id.toString() }));
}

export default function NewsPage({
                                     params,
                                 }: {
    params: Promise<{ id: string }>;
}) {
    const { id } = use(params);
    const news = use(getNewsById(id));

    if (!news) notFound();

    // Форматирование даты на сервере
    const formattedDate = new Date(news.date * 1000).toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "Europe/Moscow",
    });

    const photos = news.attachments.filter((a) => a.type === "PHOTO" && a.image?.src);
    const links = news.attachments.filter((a) => a.type === "LINK");

    const fallbackImage = "https://images.techinsider.ru/upload/img_cache/aac/aacbbe0ebbeb260080c7e4706e13fc2b_cropped_320x320.webp";

    const firstPhoto = photos[0]?.image?.src;
    const firstLinkPhoto = links.find((a) => a.image?.src)?.image?.src;
    const imageToShow = firstPhoto || firstLinkPhoto || fallbackImage;

    return (
        <div className={styles.container}>
            <Link href="/" className={styles.backLink}>
                ← Все новости
            </Link>

            <h1 className={styles.title}>{news.text.split("\n")[0]}</h1>

            <div className={styles.meta}>
                <span className={styles.type}>{news.type.replace("Вика_", "")}</span>
                <time className={styles.date}>{formattedDate}</time>
            </div>

            <div className={styles.gallery}>
                <img
                    src={imageToShow}
                    alt="Изображение новости"
                    className={styles.image}
                />
            </div>

            <div className={styles.content}>
                {news.text.split("\n").map((line, i) => (
                    <p key={i} className={styles.paragraph}>
                        {line}
                    </p>
                ))}
            </div>

            {links.length > 0 && (
                <div className={styles.links}>
                    <h2 className={styles.sectionTitle}>Полезные ссылки</h2>
                    {links.map((link, i) => (
                        <a key={i} href={link.link} className={styles.link}>
                            <span className={styles.linkTitle}>{link.titleLink}</span>
                            {link.description && (
                                <span className={styles.linkDescription}>
                  {link.description}
                </span>
                            )}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}

