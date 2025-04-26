import type {NewsItem} from "./types";

export async function getAllNews(): Promise<NewsItem[]> {
    return (await import('./news.json')).default;
}

export async function getNewsById(id: string): Promise<NewsItem | null> {
    const data: NewsItem[] = (await import('./news.json')).default;
    const numericId = parseInt(id, 10);
    if (isNaN(numericId)) return null;
    return data.find((item) => item.id === numericId) || null;
}