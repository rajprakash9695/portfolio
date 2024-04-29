import Image from 'next/image';
export default function Hero() {
  return (
    <>
      <div className="my-12 text-center">
        <Image
          src={'/profile.svg'}
          alt="profile"
          width={550}
          height={550}
          className="mx-auto "
        />
        <p className="text-xl font-['Poppins'] ">Hey</p>
        <p className="text-4xl font-extrabold">I'm Abc Yadav</p>
        <p className="text-2xl font-mediun">MERN Stack Developer</p>
        <p className="max-w-lg mx-auto text-sm mt-4">
          A highly motivated student studying Artificial Intelligence and
          Machine Learning. Actively seeking opportunities to apply my skills
          and knowledge to real-world projects and contribute to the advancement
          of the industry.
        </p>
      </div>
    </>
  );
}
