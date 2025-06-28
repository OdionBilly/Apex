import Hero from '../components/Hero';
import contactimg from '../../public/performance.jpg'




export default function Contact() {

    return (
        <div>
            <div className="text-[#fff]">
                <Hero
                   ImgData={contactimg}
                   imgAlt='background-image'
                   title='APEX CLEANERS'
                />
            </div>
    
        </div>
    )
}