import Link from "next/link";

export default function Header() {
    return (
         <div className="w-full absolute text-white z-10">
            <nav className="container relative flex flex-wrap items-center justify-between mx-auto p-8 ">
                <Link className="text-3xl font-bold" href="/">Home</Link>
                 <div className='space-x-4 font-2xl'>
                   <Link href="/About">About</Link>
                   <Link href="/Contact">Contact</Link>
                   <Link href="/Services">Services</Link>
                </div>
            </nav>
         </div>

    )
}