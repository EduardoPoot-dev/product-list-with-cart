import { create } from 'zustand'
import { ProductCart, ProductList } from './types'
import { devtools, persist } from 'zustand/middleware'

type CartState = {
    cart: ProductCart[],
    addToCart: (product: ProductList) => void
    incrementQuantityProduct: (product: ProductCart) => void
    decrementQuantityProduct: (product: ProductCart) => void
    deleteProductCart: (productName: ProductCart['name']) => void
    resetCart: () => void
}

export const useCartStore = create<CartState>()(
    devtools(
        persist(
            (set, get) => ({
                cart: [],
                addToCart: (product) => {
                    const newProduct = {
                        ...product,
                        quantity: 1
                    }

                    set(state => ({
                        cart: [...state.cart, newProduct]
                    }))
                },
                incrementQuantityProduct: (product) => {
                    const cart = get().cart.map(productCart => {
                        if (productCart.name === product.name) {
                            productCart.quantity++
                        }
                        return productCart
                    })

                    set({
                        cart
                    })
                },
                decrementQuantityProduct: (product) => {
                    let cart: ProductCart[] = []

                    if (product.quantity > 1) {
                        // Decrement product quantity
                        cart = get().cart.map(productCart => {
                            if (productCart.name === product.name) {
                                productCart.quantity--
                            }
                            return productCart
                        })
                    } else {
                        // Delete product from cart   
                        cart = get().cart.filter(productCart => productCart.name !== product.name)
                    }

                    set({
                        cart
                    })
                },
                resetCart: () => {
                    set({
                        cart: []
                    })
                },
                deleteProductCart: (productName) => {
                    set(state => ({
                        cart: state.cart.filter(prdocutCart => prdocutCart.name !== productName)
                    }))
                }
            }),
            { name: 'cartStorage' },
        )
    )
)