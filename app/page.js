import Hero from '../components/Hero/Hero';
import Portfolio from '../components/Portfolio/Portfolio';
import GetInTouch from '../components/About/GetInTouch';
import Footer from '../components/Footer/Footer';
import Nav from '@/components/Nav/Nav';

export default function Welcome() {
  return (
    <>
      <Nav />
      <Hero />
      <Portfolio />
      <GetInTouch />
      <Footer />
    </>
  );
}
