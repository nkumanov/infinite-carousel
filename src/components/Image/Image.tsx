import styles from "./Image.module.scss";

type ImageProps = {
  url: string;
  id: string;
};
const Image = ({ id, url }: ImageProps) => {
  return (
    <div className={styles.imageContainer}>
      <img loading="lazy" src={url} alt={id} className={styles.image} />
    </div>
  );
};

export default Image;
