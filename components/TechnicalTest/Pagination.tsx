'use client'

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from "react";

interface Product {
  name: string;
  price: number;
}

interface PaginationProps {
  products: Product[];
}

export default function Pagination({ products }: PaginationProps) {
    const [offset, setOffSet] = useState<number>(0);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
    const [paginatedProducts, setPagintadedProducts] = useState<Product[]>([]);
    const searchParams = useSearchParams();


    

    useEffect(() => {
        const q = searchParams.get('q');
        if (q) {
          const filteredProducts = products.filter((product) =>
            product.name.toLowerCase().includes(q.toLowerCase())
          );
          setFilteredProducts(filteredProducts)
        }
        else{
            setFilteredProducts(products)
        }

    }, [searchParams, products]);
    
    useEffect(() => {
        const productsFiltered = filteredProducts.slice(offset, offset + 5);
        setPagintadedProducts(productsFiltered);
    }, [offset, filteredProducts]);

    const handleBack = () => {
        if (offset < 5) {
        setOffSet(0);
        } else {
        setOffSet(offset - 5);
        }
    };

    const handleNext = () => {
        if (offset >= filteredProducts.length - 5) {
            return;
        } else {
            console.log('offSet: ', offset)
            console.log('tamaño: ', filteredProducts.length)
            setOffSet(offset + 5);
        }
    };

    return (
        <div className="h-full w-full">
            <h1 className='text-3xl font-bold text-black'>Lista de Productos</h1> 
            <div className="w-full min-w-[] flex flex-wrap items-center justify-start h-full gap-4 p-10">
                {paginatedProducts.map((producto: Product, index: number) => (
                <div className="card p-4 bg-gray-200 border rounded" key={index}>
                    <div className="card-body">
                        <h5 className="card-title">{producto.name}</h5>
                        <p>${producto.price}</p>
                    </div>
                </div>
                ))}
            </div>
            {/* Controles de navegación */}
            <div className="flex justify-center items-center gap-10">
                <div className="">
                    <button className="btn btn-circle btn-primary" onClick={() => handleBack()}>
                    ❮
                    </button>
                </div>
                <div className="">
                    <button className="btn btn-circle btn-primary" onClick={() => handleNext()}>
                    ❯
                    </button>
                </div>
            </div>
        </div>
    );
}
