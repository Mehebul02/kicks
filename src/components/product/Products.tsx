
import { bannerImg1 } from '@/src/assets/images'
import CustomButton from '../shared/CustomButton'
import ProductCard from './ProductCard'

const products = [
    {
        id: 1,
        name: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES',
        price: 125,
        image: bannerImg1,
    },
    {
        id: 2,
        name: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES',
        price: 125,
        image: bannerImg1,
    },
    {
        id: 3,
        name: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES',
        price: 125,
        image: bannerImg1,
    },
    {
        id: 4,
        name: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES',
        price: 125,
        image: bannerImg1,
    },
]

const Products = () => {
    
    return (
       <section className="w-full bg-background px-4 md:px-8 mb-8 lg:mb-24">
           
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
                <h2 className="text-2xl md:text-5xl lg:text-7xl font-black text-secondary leading-tight max-w-2xl">
                    DON&lsquo;T MISS OUT<br />NEW DROPS
                </h2>
                <CustomButton> SHOP NEW DROPS</CustomButton>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => <ProductCard key={product.id} product={product}/>)}
            </div>
        </section>
    );
};

export default Products;
