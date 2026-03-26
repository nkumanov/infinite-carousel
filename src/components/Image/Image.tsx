import styles from "./Image.module.scss";

type ImageProps = {
  url: string;
};
const Image = ({ url }: ImageProps) => {
  return (
    <div className={styles.imageContainer}>
      <img src={url} alt={"Image still loading"} className={styles.image} />
    </div>
  );
};

export default Image;
