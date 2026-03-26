import styles from "./Image.module.scss";

type ImageProps = {
  id: string;
  url: string;
};
const Image = ({ id, url }: ImageProps) => {
  return (
    <div className={styles.imageContainer}>
      <img src={url} alt={"Image still loading"} className={styles.image} />
    </div>
  );
};

export default Image;
