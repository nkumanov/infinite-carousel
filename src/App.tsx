import styles from "./App.module.scss";
import Carousel from "./components/Carousel/Carousel";

function App() {
  return (
    <section className={styles.testClass}>
      <h1>This is simple example of Infinite Carousel.</h1>
      <h3>On desktop, scroll vertically in the container.</h3>
      <h3>On mobile, just user normal horizontal scroll with finger.</h3>
      <Carousel />
    </section>
  );
}

export default App;
