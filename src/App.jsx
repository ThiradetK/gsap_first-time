import About from './components/About';
import Cocktails from './components/Cocktails';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
    </main>
  );
};

export default App;
