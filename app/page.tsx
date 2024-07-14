'use client'; 
import Image from "next/image";
import SearchButtonAndInput from "../components/SearchButtonAndInput";


export default function Home() {

  return (
    <>
      <div className="flex flex-col gap-12 items-center space-y-4 md:space-x-4 md:space-y-0">
        <Image
          src="/logo_brickbro.png"
          alt="Logo of the company BrickBro"
          width={200}
          height={100}
        />

        <SearchButtonAndInput />
      </div>
    </>
  );
}

