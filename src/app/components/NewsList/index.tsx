import { NewsItem } from "../../data/types";
import NewsCard from "../NewsCard";
import styles from "./styles.module.css";

export default function NewsList({ news }: { news: NewsItem[] }) {
  return (
    <div className={styles.list}>
      {news.map((item) => (
        <NewsCard key={item.id} news={item} />
      ))}
    </div>
  );
}
