import Hero from "../components/Hero";
import aboutimage from '../../public/reliability.jpg'


export default function About() {

    return (
        <div className="text-[#fff] ">
             <Hero
             ImgData={aboutimage}
             imgAlt="background-image"
             title= "About image"  
             />
        </div>
    )
}