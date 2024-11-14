import Image from "next/image";
import photo from "../../../../public/images/photo.png"

export default function About() {
  return (
    <div className="h-screen w-full bg-[rgb(231,231,231)] flex justify-around">
      <div className="relative left-[20px] top-[50px]">
        <h1 className="text-black text-4xl">About Me</h1>
        <p className="text-black relative left-[20px] top-[60px] text-[26px]">
          Hi! I’m a passionate photographer with a love for <br />
          capturing moments through my lens. My <br />
          goal is not just to take pictures, but to tell a <br />
          story, evoke emotions, and create lasting <br />
          memories with each shot. Whether it's <br />
          wedding photography, portraits, or <br />
          landscapes, I strive for perfection in every <br />
          frame. My mission is to provide every client with <br />
          beautiful memories they can cherish forever.
        </p>
      </div>
      <div className="flex items-center  justify-center ">
        <Image className="relative -top-20" src={photo} alt="owner" height={100} width={400} />
      </div>
    </div>
    
  );
}