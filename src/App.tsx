import styles from "./App.module.scss";
import Carousel from "./components/Carousel/Carousel";

function App() {
  return (
    <section className={styles.testClass}>
      <h1>This is a simple infinite carousel example.</h1>
      <h3>On desktop, scroll vertically inside the container.</h3>
      <h3>On mobile, use normal horizontal scrolling with your finger.</h3>
      <Carousel />
    </section>
  );
}

export default App;
