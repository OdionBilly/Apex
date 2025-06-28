import Image from 'next/image'
import homeimg from '../public/backimg.jpg'
import Hero from './components/Hero';

export default function Home() {
  return (
    <div className="bg-[green] text-[#fff]">
       HOME PAGE
            <div className="">
                <Hero
                ImgData={homeimg}
                imgAlt='background-image'
                title='APEX CLEANERS'/>
            </div>
  </div>

  );
}
