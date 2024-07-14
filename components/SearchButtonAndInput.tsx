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
    <div className="flex flex-col items-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
      <form onSubmit={handleSubmit} className="flex items-center space-x-2">
        <div className="relative">
          <input
            name="address"
            className="border-2 border-gray-300 pl-24 pr-2 py-3 rounded focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="🔎 Address"
          />
        </div>
        <button
          type="submit"
          className="border-2 border-gray-300 bg-gray-100 text-blue-600 py-1 px-4 rounded focus:outline-none hover:bg-gray-200"
        >
          Search
        </button>
      </form>
    </div>
  );
}
