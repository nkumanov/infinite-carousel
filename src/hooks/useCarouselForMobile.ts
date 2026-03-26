import { useEffect } from "react";
import { PREFETCH_PX } from "../utils/config";
import { isMobileLike } from "../utils/isMobile";

export function useCarouselForMobile(
  imagesContainer: React.RefObject<HTMLElement | null>,
  pendingReq: React.RefObject<boolean>,
  setPage: (value: React.SetStateAction<number>) => void,
) {
  useEffect(() => {
    if (!isMobileLike) return;
    const container = imagesContainer.current;
    if (!container) return;

    const handleWheel = () => {
      const remaining =
        container.scrollWidth - (container.scrollLeft + container.clientWidth);
      const offset = remaining < PREFETCH_PX;
      if (offset && !pendingReq.current) {
        pendingReq.current = true;
        setPage((prev) => prev + 1);
      }
    };

    container.addEventListener("scroll", handleWheel);

    return () => {
      container.removeEventListener("scroll", handleWheel);
    };
  }, []);
}
