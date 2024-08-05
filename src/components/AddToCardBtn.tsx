import { useCartStore } from "../store"
import { ProductList } from "../types"

type AddToCardBtnProps = {
    product: ProductList
}

export default function AddToCardBtn({product} : AddToCardBtnProps) {
    const addToCart = useCartStore(state => state.addToCart)

    return (
        <button
            className="w-36 h-10 bg-white py-2 text-sm border border-rose-900 hover:border-rose-600 rounded-3xl font-semibold text-rose-900
            hover:text-rose-500 transition-colors"
            onClick={() => addToCart(product)}
        >
            <img src="/icon-add-to-cart.svg" className="inline-block mr-2 " alt="Icon add to cart" />
            Add to cart
        </button>
    )
}
