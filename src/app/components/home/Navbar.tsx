import Image from "next/image";
import logo from "../../../../public/images/logo.jpg"
import Link from "next/link";

export default function Navbar() {
  return (
    <body>
  <div className="h-[100px]  bg-[rgb(240,240,240)] flex justify-around">
    <div className="h-[200px] w-[167px]">
      <Image src={logo} alt="logo" height={100} width={200} />
    </div>
    <div className="h-[40px] w-[400px] bg-transparent relative top-[30px] flex justify-evenly items-center font-[545]">
      <Link href="http://localhost:3000/" className="text-[16px] text-black no-underline border-b-2 border-transparent hover:border-b-4 hover:border-green-500">
        Home
      </Link>
      <Link href="/pages/about" className="text-[16px] text-black no-underline border-b-2 border-transparent hover:border-b-4 hover:border-green-500">
        About
      </Link>
      <Link href="/pages/contact" className="text-[16px] text-black no-underline border-b-2 border-transparent hover:border-b-4 hover:border-green-500">
        Contact US
      </Link>
    </div>
  </div>
</body>

   
  );
}