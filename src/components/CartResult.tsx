import { XMarkIcon } from "@heroicons/react/20/solid"
import { useTotal } from "../hooks/useTotal"
import { useCartStore } from "../store"
import { formatCurrency, multiplication } from "../utils"

type CartResultProps = {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function CartResult({setShowModal} : CartResultProps) {
    const { total } = useTotal()
    const deleteProductCart = useCartStore(state => state.deleteProductCart)

    const cart = useCartStore(state => state.cart)

    // H3 - Your cart (number)
    const cartItems = cart.reduce((acc, productCart) =>
        acc + productCart.quantity, 0)

    return (
        <div>
            <div className="bg-white rounded-xl p-4 ">
                <h3 className="font-bold text-xl text-rose-500">{`Your cart (${cartItems})`}</h3>

                <div className="mt-2">
                    {cart.map(product => (
                        <div key={product.name} className="border-b py-3 flex justify-between items-center">
                            <div>
                                <p className="text-rose-900 text-sm font-semibold">{product.name}</p>
                                <div className="flex gap-2 mt-1">
                                    <span className="text-sm font-semibold text-rose-500 mr-2">{`${product.quantity}x`}</span>
                                    <span className="text-sm text-rose-400">{`@${formatCurrency(product.price)}`}</span>
                                    <span className="text-sm font-semibold text-rose-400">{formatCurrency(multiplication(product.price, product.quantity))}</span>
                                </div>
                            </div>
                            <div>
                                <button
                                    className="w-5 h-5 flex justify-center items-center border-2 border-rose-300 transition-colors hover:border-rose-900 rounded-full"
                                    onClick={() => deleteProductCart(product.name)}
                                >
                                    <XMarkIcon className="text-rose-300 transition-colors hover:text-rose-900"/>
                                </button>
                            </div>
                        </div>
                    ))}

                    <div className="py-4 flex justify-between">
                        <p className="text-sm text-rose-900">Order total</p>
                        <span className="text-lg font-bold text-rose-900">{formatCurrency(total)}</span>
                    </div>

                    <div className="flex justify-center items-center p-2 bg-rose-50 rounded-lg gap-1">
                        <img src="/icon-carbon-neutral.svg" alt="Icon carbon" />
                        <p className="text-xs text-rose-900">This is a <span className="font-semibold">carbon-neutral</span> delivery</p>
                    </div>

                    <button
                        className="px-6 py-3 bg-rose-500 font-semibold text-sm mt-4 rounded-3xl w-full text-white"
                        onClick={() => setShowModal(true)}
                    >Confirm order</button>

                </div>

            </div>
        </div>
    )
}
