import Link from "next/link";

export default function Header() {
    return (
         <div>
             <Link href="/">Home</Link>
            <Link href="/About">About</Link>
            <Link href="/Contact">Contact</Link>
            <Link href="/Services">Services</Link>
         </div>

    )
}