// import React from "react";
// import styles from "./style";

// import { Navbar, Hero } from "./components";

// const App = () => (
//   <div className="bg-primary w-full overflow-hidden">
//     <div className={`${styles.paddingX} ${styles.flexCenter}`}>
//       <div className={`${styles.boxWidth}`}>
//         <Navbar />
//       </div> 

//       <div className={`bg-primary ${styles.flexStart}`}>
//         <div className={`${styles.boxWidth}`}>
//           Hero
//         </div>
//       </div>

//       <div className={`bg-primary ${styles.flexStart}`}>
//         <div className={`${styles.boxWidth}`}>
//           Stats
//           Business
//           Billing
//           Card Deal 
//           Testimonials
//           Clients
//           CTA - Call To Action
//           Footer
//         </div>
//       </div>

//     </div>
//   </div>
// );

// export default App;

import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        {/* <Stats /> */}
        <Business />
        {/* <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer /> */}
      </div>
    </div>
  </div>
);

export default App;
