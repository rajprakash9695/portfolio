'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Project() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (src: any) => {
    setSelectedImage(src);
  };
  return (
    <>
      <div className="max-w-screen-xl mx-auto my-16 px-5">
        <p className=" text-lg sm:text-xl font-['Poppins'] text-start">
          Projects
        </p>
        <div className="flex mt-2">
          <div className="border border-b border-3 border-blue-500 bg-blue-500 rounded-l-full w-2/3 h-2 sm:h-3"></div>
          <div className="border border-b border-3 border-blue-500 bg-yellow-300 rounded-r-full w-1/3 h-2 sm:h-3"></div>
        </div>
        <div className="flex gap-5 my-16 flex-col-reverse sm:flex-row ">
          <div className=" w-full sm:w-1/3 flex flex-row sm:flex-col gap-5 p-5">
            <img
              src="/p1.svg"
              alt="project"
              className="h-32 sm:h-44"
              onClick={() => handleClick('/p1.svg')}
            />
            <img
              src="/p2.svg"
              alt="project"
              className="h-32 sm:h-44"
              onClick={() => handleClick('/p2.svg')}
            />
            <img
              src="/p3.svg"
              alt="project"
              className="h-32 sm:h-40"
              onClick={() => handleClick('/p3.svg')}
            />
          </div>
          <div className=" w-full sm:w-2/3 flex justify-center items-center">
            <div className="p-5  flex flex-col text-center shadow-xl rounded-xl overflow-hidden">
              {selectedImage && (
                <img
                  src={selectedImage}
                  alt="p"
                  className="h-72 object-cover duration-500 hover:scale-105"
                />
              )}
              <div className="my-6 ">
                <h1 className="text-md mt-2">Content Aniliser</h1>
                <p className="text-sm max-w-sm my-2 mx-auto">
                  A robust tool designed for content creators, bloggers, and
                  writerss
                </p>
                <Link href={'/'}>
                  <Image
                    src={'/github.svg'}
                    alt="github"
                    height={50}
                    width={50}
                    className="mx-auto mt-3"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
