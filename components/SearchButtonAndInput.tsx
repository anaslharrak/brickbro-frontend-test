'use client'

import { FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { AddressContext } from '../context/AddressContext';

export default function SearchButtonAndInput() {
  const router = useRouter();
  const { setAddress } = useContext(AddressContext);


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const address = formData.get('address') as string;
    setAddress(address);
    router.push('/map');
  }



  return (
    <div className="flex flex-col items-center space-y-4 md:flex-row md:space-x-4 md:space-y-0 w-full">
    <form onSubmit={handleSubmit} className="flex items-center space-x-2 w-full">
      <div className="flex-grow">
        <input
          name="address"
          className="w-full border-2 border-gray-300 pr-2 py-3 rounded focus:outline-none focus:border-blue-500 text-center"
          type="text"
          placeholder="🔎 Address"
        />
      </div>
      <button
        type="submit"
        className="flex-none border-2 border-gray-300 bg-gray-100 text-blue-600 py-2 px-4 rounded focus:outline-none hover:bg-gray-200"
      >
        Search
      </button>
    </form>
  </div>
  );
}
