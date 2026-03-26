import { useState, useEffect, useRef } from "react";
import type { ImagesResponse } from "../types/images";

export function useFetch() {
  const [data, setData] = useState<ImagesResponse | []>([]);
  const [error, setError] = useState<Error | null>(null);
  const [page, setPage] = useState(1);
  const pendingReq = useRef(false);

  useEffect(() => {
    const controller = new AbortController();
    const fetchImages = async () => {
      try {
        pendingReq.current = true;
        const response = await fetch(
          `https://picsum.photos/v2/list?page=${page}&limit=10`,
          { signal: controller.signal },
        );

        if (response) {
          const json: ImagesResponse = await response.json();

          setData((prev) => [...prev, ...json]);
        }
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") {
          return;
        }
        if (error instanceof Error) {
          setError(error);
        }
      } finally {
        pendingReq.current = false;
      }
    };

    fetchImages();

    return () => {
      controller.abort();
    };
  }, [page]);

  return {
    data,
    error,
    pendingReq,
    setPage,
  };
}
