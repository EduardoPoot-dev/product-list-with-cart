import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid"
import { useCartStore } from "../store"
import { ProductCart } from "../types"

type IncrQuantityBtnProps = {
  productName: ProductCart['name']
}

export default function IncrQuantityBtn({productName} : IncrQuantityBtnProps) {
  const cart = useCartStore(state => state.cart)
  const product = cart.filter(cartProductItem => cartProductItem.name === productName)[0]

  const decrementQuantityProduct = useCartStore(state => state.decrementQuantityProduct)
  const incrementQuantityProduct = useCartStore(state => state.incrementQuantityProduct)

  return (
    <div className='w-36 h-10 bg-rose-500 p-3 rounded-3xl flex items-center justify-between gap-6'>

        <button 
          className='w-5 h-5 flex justify-center items-center border rounded-full transition-colors hover:bg-white'
          onClick={() => decrementQuantityProduct(product) }
        >
            <MinusIcon className="text-white transition-colors hover:text-rose-500"/>
        </button>

        <span className='text-white text-sm'>{product.quantity}</span>

        <button 
          className='w-5 h-5 flex justify-center items-center border rounded-full transition-colors hover:bg-white'
          onClick={() => incrementQuantityProduct(product) }
        >
            <PlusIcon className="text-white transition-colors hover:text-rose-500"/>
        </button>


    </div>
  )
}
