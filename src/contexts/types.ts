export interface IProduct {
    id: number
    quantity: number
    title: string
    price: number
    image: string
}

export interface ICartContext {
    productList: IProduct[],
    addProductToCart: (cart: IProduct) => void,
    removeProductFromCart: (productId: number) => void,
    incrementQuantity: (productId: number) => void,
    decreaseQuantity: (productId: number) => void,
    contentPage: string,
    changePage: (page: string) => void,
    resetProductList: () => void
}

export interface CartProviderProps {
    children: React.ReactNode
}
