import React, { createContext, useState, useContext } from 'react';
import { CartProviderProps, ICartContext, IProduct } from './types';

const CartContext = createContext<ICartContext>({} as ICartContext);

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [productList, setProductList] = useState<IProduct[]>([])
  const [contentPage, setContentPage] = useState<string>('')

  const addProductToCart = (cart: IProduct) => {
    setProductList(prevState => [...prevState, cart])
  }

  const removeProductFromCart = (productId: number) => {
    setProductList((current) =>
      current.filter((product) => product.id !== productId)
    );
  };

  const incrementQuantity = (productId: number) => {
    const newState = productList.map(product => {
      if (product.id === productId) {
        return {...product, quantity: product.quantity + 1};
      }
      return product;
    });
    setProductList(newState);
  };

  const decreaseQuantity = (productId: number) => {
    const newState = productList.map(product => {
      if (product.id === productId) {
        return {...product, quantity: product.quantity - 1};
      }
      return product;
    });
    setProductList(newState);
  };

  const resetProductList = () => {
    setProductList([])
  }

  const changePage = (page: string) => {
    setContentPage(page)
  }

  const value = React.useMemo(() => ({
    productList, addProductToCart, removeProductFromCart, incrementQuantity, decreaseQuantity, contentPage, changePage, resetProductList
  }), [productList, contentPage, changePage, resetProductList]);

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);

  return context;
}

export { CartProvider, useCart };