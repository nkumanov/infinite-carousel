import { useEffect } from "react";
import { PREFETCH_PX } from "../utils/config";
import { isMobileLike } from "../utils/isMobile";

export function useCarouselForDesktop(
  imagesContainer: React.RefObject<HTMLElement | null>,
  pendingReq: React.RefObject<boolean>,
  setPage: (value: React.SetStateAction<number>) => void,
) {
  useEffect(() => {
    if (isMobileLike) return;
    const container = imagesContainer.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      container.scrollTo({
        left: container.scrollLeft + e.deltaY,
        behavior: "instant",
      });
      const remaining =
        container.scrollWidth - (container.scrollLeft + container.clientWidth);
      const offset = remaining < PREFETCH_PX;
      if (offset && !pendingReq.current) {
        pendingReq.current = true;
        setPage((prev) => prev + 1);
      }
    };

    container.addEventListener("wheel", handleWheel);

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);
}
