'use client'
import { useRouter } from 'next/navigation';

export default function Presentation () {
    const router = useRouter();
    
    const navigateToHome = () => {
        router.push("/");
      };

    return(
        <div className='flex justify-between shadow-md border-b border-gray-300 w-full h-full p-4 mb-4'>
            <button className='btn btn-info text-white' onClick={navigateToHome}>Go Home</button>
            <h1 className='text-4xl font-bold text-black'>Technical Test</h1>
        </div>
    )
}