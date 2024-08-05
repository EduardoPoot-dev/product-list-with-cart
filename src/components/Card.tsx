import { useMemo } from "react";
import { useCartStore } from "../store";
import { ProductList } from "../types";
import { formatCurrency } from "../utils";
import AddToCardBtn from "./AddToCardBtn";
import IncrQuantityBtn from "./IncrQuantityBtn";

type CardProps = {
    product: ProductList
}

export default function Card({product} : CardProps) {
    const cart = useCartStore(state => state.cart)

    const productExistToCart = useMemo(() => 
        cart.some(productCart => productCart.name === product.name) , [cart])

    return (
        <div className="w-full">
            <picture>
                <source srcSet={`${product.image.desktop}`} media="(min-width: 1024px)" />
                <source srcSet={`${product.image.tablet}`} media="(min-width: 768px)" />
                <source srcSet={`${product.image.mobile}`} />
                <img 
                    src={`${product.image.mobile}`} 
                    className={`${productExistToCart ? 'border-2 border-rose-900' : 'border-none'} transition-colors rounded-lg`}
                    alt="Image wafle" 
                />
            </picture>

            <div>

                <div className="flex flex-col items-center -my-6">

                    {productExistToCart ? (
                        <IncrQuantityBtn productName={product.name} />
                    ) : (
                        <AddToCardBtn product={product} />
                    )}
                    
                </div>

                <div className="mt-7 md:mt-9">
                    <p className="text-sm text-rose-900">{product.category}</p>
                    <p className="font-semibold text-rose-900">{product.name}</p>
                    <p className="text-sm font-semibold text-rose-500">{formatCurrency(product.price)}</p>
                </div>

            </div>
        </div>
    )
}
