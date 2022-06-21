import '../css/style.css';

import Navbar from './Navbar';
import StartSection from './StartSection';
import Cards from './Cards';
import Rating from './Rating';
import ExampleWorks from './ExampleWorks';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <body id="home" data-bs-spy="scroll" data-bs-target=".navbar">
      <Navbar />
      <StartSection />
      <Cards />
      <Rating />
      <ExampleWorks />
      <Contact />
      <Footer />
    </body>
  );
}

export default App;
