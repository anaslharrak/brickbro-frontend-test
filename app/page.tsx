'use client'; 
import { SearchButtonAndInput, BrickBroLogo } from "../components/exports";


export default function Home() {

  return (
    <>
      <div className="flex flex-col gap-12 items-center space-y-4 md:space-x-4 md:space-y-0"> 
        <BrickBroLogo isCentered={true} />
        <SearchButtonAndInput />
      </div>
    </>
  );
}

