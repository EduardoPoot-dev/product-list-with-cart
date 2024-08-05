//You can add new items to principal type widthout break the project
export type Product = {
    image: {
        thumbnail: string
        mobile: string
        tablet: string
        desktop: string
    },
    name: string,
    category: string
    price:number,
    quantity: number
}

export type ProductList = Pick<Product, 'image' | 'name' | 'category' | 'price'>
export type ProductCart = Pick<Product, 'image' | 'name' | 'category' | 'price' | 'quantity'>