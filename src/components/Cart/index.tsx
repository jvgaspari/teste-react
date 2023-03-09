import { useCart } from '@/contexts';
import EmptyCart from './EmptyCart';
import { ProductsInCart } from './ProductsInCart';

export const Cart = () => {
  const { productList } = useCart();

  if (productList.length === 0) {
    return <EmptyCart />;
  }

  return <ProductsInCart list={productList} />;
};
