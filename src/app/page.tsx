import { getAllNews } from "./data/newsApi";
import NewsList from "./components/NewsList";
import styles from "./page.module.css";

export default async function Home() {
    const news = await getAllNews();

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Новости пролетают мимо нас на скорости</h1>
            <NewsList news={news}/>
        </div>
    );
}
