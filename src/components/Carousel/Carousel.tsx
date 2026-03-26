import { useRef } from "react";
import { useFetch } from "../../hooks/useFetch";
import Image from "../Image/Image";
import styles from "./Carousel.module.scss";
import { useCarouselForDesktop } from "../../hooks/useCarouselForDesktop";
import { useCarouselForMobile } from "../../hooks/useCarouselForMobile";

const Carousel = () => {
  const { data, setPage, pendingReq } = useFetch();
  const imagesContainer = useRef<HTMLElement>(null);
  useCarouselForDesktop(imagesContainer, pendingReq, setPage);
  useCarouselForMobile(imagesContainer, pendingReq, setPage);

  return (
    <section ref={imagesContainer} className={styles.container}>
      {data?.map((image) => (
        <Image key={image.id} id={image.id} url={image.download_url} />
      ))}
      {pendingReq.current && (
        <p className={styles.loadingCard}>
          Loading more content, please wait ...
        </p>
      )}
    </section>
  );
};

export default Carousel;
