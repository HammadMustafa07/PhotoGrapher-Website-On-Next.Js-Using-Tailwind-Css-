import Image from "next/image";
import herogojo from "../../../../public/images/herogojo.jpg"

export default function Navbar() {
  return (
    <div className="h-screen w-screen bg-gray-500">
    <Image className="bg-black relative ml-[500px]" src={herogojo} alt="hero-img" height={500} width={800} />
    <p className="text-black text-[35px] relative -top-[400px]">
      Do you want to capture your <br /> <span className="text-[rgb(13,13,92)]">beautiful moments</span> forever
    </p>
    <p className="text-black text-[35px] relative -top-[400px]">
      We are here to turn your <br /> Visions Into<span className="text-[rgb(13,13,92)]"> Memories</span>
    </p>
  </div>
  
  );
}