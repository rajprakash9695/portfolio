export default function Contacts() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-5 py-20">
        <p className=" text-lg sm:text-xl font-['Poppins'] text-start">
          Contacts Me
        </p>
        <div className="flex mt-2">
          <div className="border border-b border-3 border-blue-500 bg-blue-500 rounded-l-full w-2/3 h-2 sm:h-3"></div>
          <div className="border border-b border-3 border-blue-500 bg-yellow-300 rounded-r-full w-1/3 h-2 sm:h-3"></div>
        </div>
        <div className="flex gap-5 justify-center items-center">
          <div className="w-1/2">
            <img src="/about.svg" alt="" />
          </div>
          <div className="w-1/2">c</div>
        </div>
      </div>
    </>
  );
}
