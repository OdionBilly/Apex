import Hero from "../components/Hero";
import sericeimg from '../../public/performance.jpg'

export default function Services() {

    return (
        <div>
            <div className="text-[#fff]">
                <Hero
                ImgData={sericeimg}
                imgAlt='background-image'
                title='APEX CLEANERS'
                
                />
            </div>
        </div>
    )
}