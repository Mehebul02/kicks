/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const ProductPurchaseActions = ({ handleAddToCart, wishlist, setWishlist }: any) => {
    return (
         <div className="flex flex-col gap-2 mt-1">
              <div className="flex gap-2">
                <Button
                  onClick={handleAddToCart}
                  className="flex-1 font-bold py-6 rounded-md text-sm tracking-wide  bg-secondary cursor-pointer hover:bg-stone-800 text-white"
                >
                  ADD TO CART
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setWishlist(!wishlist)}
                  className={`h-12 w-12 border-2 cursor-pointer rounded-md ${wishlist ? 'border-primary text-primary' : 'border-stone-300 text-white bg-secondary '
                    }`}
                >
                  <Heart className={`h-5 w-5 ${wishlist ? 'fill-[#FF6900] text-[#FF6900]' : ''}`} />
                </Button>
              </div>
              <Button
               
                className="w-full bg-primary cursor-pointer hover:bg-blue-700 text-white font-bold py-6 rounded-md text-sm"
              >
                BUY IT NOW
              </Button>
            </div>
    );
};

export default ProductPurchaseActions;