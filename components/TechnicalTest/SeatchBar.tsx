'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SearchBar() {
    const router = useRouter();
    const [value, setValue] = useState<string>('');

    const handleSearchSubmit = () => {
      const params = new URLSearchParams();
      if (value) {
        params.set('q', value);
      }
      router.push(`?${params.toString()}`);
    };

    

    return (
      <div>
        <div className="flex gap-2 justify-center align-center">
          <input
            type="text"
            placeholder="Buscar..."
            className="input input-bordered w-full max-w-md mb-4"
            value={value}
            onChange={(e)=>setValue( e.target.value)}
          />
          <button className='btn btn-primary text-white' onClick={() => handleSearchSubmit()}>Buscar</button>
        </div>
      </div>
    );
}
