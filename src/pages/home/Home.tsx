import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import InspiringStories from './components/InspiringStories';
import Testimonials from './components/Testimonials';
import Mitra from './components/Mitra';

function Home() {
  return (
    <div className="space-y-5">
      <Hero />
      <WhatWeDo />
      <InspiringStories />
      <Testimonials />
      <Mitra />
    </div>
  );
}

export default Home;
