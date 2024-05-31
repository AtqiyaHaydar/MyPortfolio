import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const useAos = () => {
  useEffect(() => {
    AOS.init({
      // Global settings:
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);
};

export default useAos;