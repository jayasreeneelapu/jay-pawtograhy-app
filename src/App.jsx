import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { Contact } from "./components/Contact/Contact";
import { Work } from "./components/Work/Work";
import { Footer } from "./components/Footer/Footer";
import { About } from "./components/About/About";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
