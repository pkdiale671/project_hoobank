import styles from "./style";
import { Footer, Navbar } from "./components";
import { Landing, ContactUs } from "./screens";
import { Route, Routes } from "react-router-dom";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <Routes>
      <Route path="/cart" element={<Landing />} />
      <Route path="/giveaways" element={<ContactUs />} />
    </Routes>


    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
