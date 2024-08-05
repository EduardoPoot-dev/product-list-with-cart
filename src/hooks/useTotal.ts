import { useCartStore } from '../store'

export function useTotal() {
    const cart = useCartStore(state => state.cart)

    const total = cart.reduce((acc, productCart) => 
        acc + (productCart.price * productCart.quantity) , 0)
    
    return { total }
}
