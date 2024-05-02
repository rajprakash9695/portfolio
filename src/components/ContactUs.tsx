'use client';
import Image from 'next/image';
import toast from 'react-hot-toast';

export default function ContactMe() {
  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log('send');
    toast.success('I connect you soon!');
  };
  return (
    <>
      <div className="max-w-screen-xl mx-auto my-20 px-5">
        <p className=" text-lg sm:text-xl font-['Poppins'] text-start">
          Contact Me
        </p>
        <div className="flex mt-2">
          <div className="border border-b border-3 border-blue-500 bg-blue-500 rounded-l-full w-2/3 h-2 sm:h-3"></div>
          <div className="border border-b border-3 border-blue-500 bg-yellow-300 rounded-r-full w-1/3 h-2 sm:h-3"></div>
        </div>
        <div className="flex gap-2 justify-center items-center my-20">
          <div className="w-full sm:w-1/2">
            <Image src={'/about.svg'} alt="About" height={400} width={400} />
          </div>
          <div className="w-full sm:w-1/2">
            <form onSubmit={handleSubmit}>
              <div className="w-3/4  p-5 flex flex-col gap-5">
                <input
                  type="text "
                  placeholder="Name"
                  required
                  className="p-2 outline-none text-gray-400 rounded-lg shadow-xl bg-[#232732]"
                />
                <input
                  type="text "
                  placeholder="Email ID"
                  required
                  className="p-2 outline-none text-gray-400 rounded-lg shadow-xl bg-[#232732]"
                />
                <textarea
                  name=""
                  id=""
                  rows={6}
                  cols={2}
                  className="p-2 outline-none text-gray-400 rounded-lg shadow-xl bg-[#232732]"
                />
                <button
                  type="submit"
                  className=" px-5 py-2.5 rounded-full bg-rgba(36,39,44, 1) sm:text-sm font-semibold shadow-xl   mx-auto"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
