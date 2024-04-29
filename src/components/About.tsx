import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-5 my-20">
        <div className="flex gap-5 items-center flex-col sm:flex-row">
          <div className="w-full sm:w-1/2">
            <Image src={"/about.svg"} alt="About" height={500} width={500} />
          </div>
          <div className="w-full sm:w-1/2">
            <h1 className=" text-lg sm:text-xl font-['Poppins'] text-center sm:text-start">
              About me
            </h1>
            <p className="max-w-lg text-sm sm:text-[1.3rem] mt-4 text-center sm:text-start">
              I am actively seeking opportunities to apply my acquired skills
              and knowledge to real-world projects. My educational background
              has equipped me with a solid foundation in AI and ML algorithms,
              data analysis, and programming languages such as Python.
              Additionally, I have gained practical experience through hands-on
              projects, both independently and collaboratively.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
