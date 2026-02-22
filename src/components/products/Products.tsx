
import CustomButton from '../shared/CustomButton'
import ProductCard from './ProductCard'
import { useGetProductsQuery } from '@/src/redux/api/productApi';
import { Product } from '@/src/types/product';
import Loading from '../shared/Loading';
const Products = () => {
    const {data,isLoading} = useGetProductsQuery({})

    if(isLoading) return <div><Loading/></div>
    
    return (
       <section className="w-full bg-background px-4 md:px-8 mb-8 lg:mb-24">
           
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
                <h2 className="text-2xl md:text-5xl lg:text-7xl font-black text-secondary leading-tight max-w-2xl">
                    DON&lsquo;T MISS OUT<br />NEW DROPS
                </h2>
                <CustomButton> SHOP NEW DROPS</CustomButton>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {data?.slice(0,8)?.map((product:Product) => <ProductCard key={product.id} product={product}/>)}
            </div>
        </section>
    );
};

export default Products;
