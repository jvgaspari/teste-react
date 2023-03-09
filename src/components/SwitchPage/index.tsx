import { useCart } from '@/contexts';
import { Cart } from '../Cart';
import { Checkout } from '../Checkout';
import { Home } from '../Home';

export const SwitchPage = () => {
  const { contentPage } = useCart();

  if (contentPage === 'cart') {
    return <Cart />;
  }

  if (contentPage === 'checkout') {
    return <Checkout />;
  }

  return <Home />;
};
