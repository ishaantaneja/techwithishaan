import Navigation from "./Navigation";
import Header from "./Header";
import AboutMe from "./AboutMe";
import Certifications from "./Certifications";
import Newsletter from "./Newsletter"
import Footer from "./Footer"

function App() {
  

  return (
    <>
      <Navigation />
      <hr />
      <div className="main">
        <Header />
        <hr />
        <section id="about">
          <AboutMe />
        </section>
        <hr />
        <section id="certifications">
          <Certifications />
        </section>
        <hr />
        <section id="Newsletter">
          <Newsletter />
        </section>
        <hr />

      </div>
      <Footer />
      
      
    </>
    
  );

}

export default App
