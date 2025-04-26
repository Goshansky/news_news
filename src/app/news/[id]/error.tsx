"use client";
import styles from "./error.module.css";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className={styles.container}>
      <h2>Произошла ошибка!</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()} className={styles.retryButton}>
        Попробовать снова
      </button>
    </div>
  );
}
