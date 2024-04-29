import Image from "next/image";
export default function Hero() {
  return (
    <>
      <div className="my-12 text-center px-4">
        <Image
          src={"/profile.svg"}
          alt="profile"
          width={500}
          height={500}
          className="mx-auto "
        />
        <p className=" text-lg sm:text-xl font-['Poppins'] ">Hey</p>
        <p className="text-2xl sm:text-4xl font-extrabold">I'm Abc Yadav</p>
        <p className="text-lg sm:text-2xl font-mediun">MERN Stack Developer</p>
        <p className="max-w-lg mx-auto text-sm mt-4">
          A highly motivated student studying Artificial Intelligence and
          Machine Learning. Actively seeking opportunities to apply my skills
          and knowledge to real-world projects and contribute to the advancement
          of the industry.
        </p>
        <div className="flex  justify-center gap-5 my-6">
          <button className=" px-5 py-2.5 rounded-full bg-rgba(36,39,44, 1) sm:text-md font-semibold shadow-xl ">
            Learn More
          </button>
          <button className=" px-5 py-2.5 rounded-full bg-rgba(36,39,44, 1) sm:text-md font-semibold shadow-xl ">
            Contact me
          </button>
        </div>
      </div>
    </>
  );
}
