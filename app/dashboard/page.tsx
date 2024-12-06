import SearchBar from "@/components/TechnicalTest/SeatchBar";
import Pagination from "@/components/TechnicalTest/Pagination";
import Presentation from "@/components/TechnicalTest/Presentation";
import { fetchProducts } from "@/components/TechnicalTest/supabaseDB";

export const dynamic = "force-dynamic";

export default async function Dashboard() {
    const products = await fetchProducts()  
    
    return (
      <main className="h-full w-full p-8 pb-24">
        <Presentation/>
        <SearchBar/>
        <Pagination products={products}/>
      </main>
    );
}