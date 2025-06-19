import type { StaticImageData } from "next/image"
import Image from "next/image";


interface HeroProps{
    ImgData: StaticImageData;
    imgAlt: string;
    title: String;
}

export default function Hero(props: HeroProps) {

    return(
        <div className="relative h-screen">
            <div className="absolute inset-0 -z-10">
              <Image
              src={props.ImgData} 
              alt={props.imgAlt}
              fill
              style= {{ objectFit:'cover' }}
                />
            </div>
            <div className="pt-48 flex justify-center">
                <h1>{props.title}</h1>
            </div>
        </div>
    )
}