import Image from 'next/image'
import homeimg from '../public/backimg.jpg'
import Hero from './components/Hero';

export default function Home() {
  return (
    <div className="bg-[green]">
       HOME PAGE
            <div className="absolute inset-0 -z-10">
              {/* <Image
              src={homeimg} 
              alt='background-image' 
              fill
              style= {{ objectFit:'cover' }}
                /> */}
                <Hero
                ImgData={homeimg}
                imgAlt='background-image'
                title='APEX CLEANERS'/>
            </div>
  </div>

  );
}
