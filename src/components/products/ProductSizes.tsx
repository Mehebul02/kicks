interface ProductSizesProps {
    selectedSize: string
    setSelectedSize: React.Dispatch<React.SetStateAction<string>>
}
const ProductSizes = ({selectedSize, setSelectedSize}: ProductSizesProps) => {
       const sizes= [
    { id: '1', size: '38', available: true },
    { id: '2', size: '39', available: false },
    { id: '3', size: '40', available: false },
    { id: '4', size: '41', available: true },
    { id: '5', size: '42', available: true },
    { id: '6', size: '43', available: true },
    { id: '7', size: '46', available: true },
    { id: '8', size: '47', available: true },
    { id: '9', size: '44', available: true },
    { id: '10', size: '45', available: true },
  ]
    return (
        
              <div className="grid grid-cols-5 lg:grid-cols-8 gap-1.5">
                {sizes.map((size) => (
                  <button
                    key={size.id}
                    onClick={() => size.available && setSelectedSize(size.size)}
                    disabled={!size.available}
                    className={`py-2 px-4 rounded border-2 font-semibold text-sm cursor-pointer transition-all ${selectedSize === size.size
                        ? 'bg-secondary border-black text-white'
                        : size.available
                          ? 'border-stone-300 text-black hover:border-stone-500 bg-white'
                          : 'border-stone-200 text-stone-300 cursor-not-allowed line-through bg-white'
                      }`}
                  >
                    {size.size}
                  </button>
                ))}
              </div>
      
    );
};

export default ProductSizes;