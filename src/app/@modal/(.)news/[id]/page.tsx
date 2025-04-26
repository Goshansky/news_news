"use client";

import { getNewsById } from "@/app/data/newsApi";
import Modal from "@/app/components/Modal";
import { use, useEffect, useState } from "react";
import { NewsItem } from "@/app/data/types";
import { useRouter } from "next/navigation";

export default function NewsModal({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { id } = use(params);

  const [news, setNews] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      const fetchedNews = await getNewsById(id);
      setNews(fetchedNews);
      setLoading(false);
    }

    fetchNews();
  }, [id]);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (!news) {
    return <div>Новость не найдена</div>;
  }

  const handleCloseAction = () => router.back();

  return <Modal news={news} onCloseAction={handleCloseAction} />;
}

