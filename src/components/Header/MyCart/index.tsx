import CartIcon from '@/assets/svg/CartIcon';
import { useCart } from '@/contexts';
import { Typography, Box, IconButton } from '@mui/material';

export const MyCart = () => {
  const { productList, changePage } = useCart();
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box mr={'10px'}>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Typography
            color={'#FFFFFF'}
            fontWeight={600}
            fontSize={14}
            lineHeight={'19px'}
          >
            Meu Carrinho
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Typography
            color={'#999999'}
            fontWeight={600}
            fontSize={12}
            lineHeight={'16px'}
          >
            {productList.length} Items
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <IconButton style={{ zIndex: 1 }} onClick={() => changePage('cart')}>
          <CartIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
