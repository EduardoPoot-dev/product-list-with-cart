import { useTotal } from "../hooks/useTotal"
import { useCartStore } from "../store"
import { formatCurrency, multiplication } from "../utils"
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

type ModalProps = {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Modal({ setShowModal }: ModalProps) {
    const { width, height } = useWindowSize()

    const { total } = useTotal()

    const cart = useCartStore(state => state.cart)
    const resetCart = useCartStore(state => state.resetCart)

    const handleStartNewOrder = () => {
        setShowModal(false)
        resetCart()
    }

    return (
        <div className='w-full h-screen fixed inset-0 bg-[rgb(0,0,0,0.3)] pt-28 md:p-0 md:flex md:items-center'>
            <section className='w-full h-full md:w-1/2 xl:w-1/3 md:h-auto mx-auto bg-white p-10 rounded-t-3xl md:rounded-3xl  '>
                <img src="/icon-order-confirmed.svg" alt="Icon confirmed" />

                <h2 className='mt-5 text-4xl w-1/2 md:w-auto text-rose-900 font-bold '>Order confirmed</h2>

                <p className='text-rose-900 mt-4'>We hope you enjoy your food!</p>

                <div className='bg-rose-50 rounded-lg p-5 mt-5 w-full max-h-80 overflow-y-auto '>

                    {cart.map(product => (
                        <div className='flex gap-4 border-b py-2'>
                            <figure className='w-14'>
                                <img src={product.image.thumbnail} alt="Image brownie" />
                            </figure>

                            <div className='w-full flex justify-between items-center'>
                                <div>
                                    <p className='text-rose-900 font-semibold'>{product.name}</p>

                                    <ul className='flex gap-2'>
                                        <li className='text-sm font-semibold text-rose-500'>{`x${product.quantity}`}</li>
                                        <li className='text-sm'>{`${formatCurrency(product.price)}`}</li>
                                    </ul>
                                </div>

                                <div>
                                    <p className='text-rose-900 font-semibold'>{`${formatCurrency(multiplication(product.price, product.quantity))}`}</p>
                                </div>
                            </div>
                        </div>

                    ))}

                    <div className='flex justify-between items-center mt-6'>
                        <p className='text-sm'>Order Total</p>
                        <p className='text-xl font-bold text-rose-900'>{formatCurrency(total)}</p>
                    </div>
                </div>

                <button
                    className='mt-8 py-4 w-full bg-rose-500 rounded-3xl text-white font-semibold'
                    onClick={handleStartNewOrder}
                >Start New Order</button>
            </section>

            <Confetti
                width={width}
                height={height}
                recycle={false}
                tweenDuration={1000}
            />
        </div>
    )
}
