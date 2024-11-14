
export default function Contact() {
  return (
        <div className="bg-[#E7E7E7] h-screen p-5">
          <h1 className="text-[rgb(0,0,75)] text-xl mb-6">Contact Lorem Photographer</h1>
          <div className="relative left-[20px] top-[10px] mb-4">
            <h5 className="text-[rgb(0,0,75)] text-[20px]">Name:</h5>
            <input
              type="text"
              placeholder="Type Your Name"
              className="h-[20px] w-[160px] py-[15px] bg-[#A8A8A8] rounded-[4px] border-2 border-black"
            />
          </div>
          <div className="relative left-[20px] top-[20px] mb-4">
            <h5 className="text-[rgb(0,0,75)] text-[20px]">Email:</h5>
            <input
              type="text"
              placeholder="Type Your Email Address"
              className="h-[40px] w-[160px] py-[5px] bg-[#A8A8A8] rounded-[4px] border-2 border-black"
            />
          </div>
          <div className="relative left-[20px] top-[40px] mb-4">
            <h5 className="text-[rgb(0,0,75)] text-[20px]">Subject:</h5>
            <input
              type="text"
              placeholder="Type Your Subject"
              className="h-[40px] w-[160px] py-[5px] bg-[#A8A8A8] rounded-[4px] border-2 border-black"
            />
          </div>
          <div className="relative left-[20px] top-[60px] mb-4">
            <h5 className="text-[rgb(0,0,75)] text-[20px]">Message:</h5>
            <input
              type="text"
              placeholder="Type Your Message"
              className="h-[60px] w-[260px] bg-[#A8A8A8] rounded-[4px] border-2 border-black"
            />
          </div>
          <button className="h-[40px] w-[80px] relative left-[20px] top-[70px] bg-[rgb(0,0,194)] rounded-[4px] cursor-pointer border-2 border-black">
            Send
          </button>
        </div>
      );
    }
