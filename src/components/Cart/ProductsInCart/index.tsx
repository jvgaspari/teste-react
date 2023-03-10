import { ProductsInCartTypes } from './types';
import { Grid, Box, Button, Typography, IconButton } from '@mui/material';
import Image from 'next/image';
import { useCart } from '@/contexts';
import { Fragment, useEffect, useState } from 'react';
import Mask from '@/utils/mask';
import Decrease from '@/assets/svg/decrease';
import Increase from '@/assets/svg/increase';
import Delete from '@/assets/svg/delete';
import { HeaderCart } from './HeaderCart';

export const ProductsInCart: React.FC<ProductsInCartTypes> = ({ list }) => {
  const {
    incrementQuantity,
    decreaseQuantity,
    removeProductFromCart,
    changePage,
    resetProductList,
  } = useCart();
  const [cartAmount, setCartAmount] = useState<number>(0);

  useEffect(() => {
    const amount = list.reduce(
      (acc, row) => acc + row?.price * row.quantity,
      0
    );
    setCartAmount(amount);
  }, [list]);

  return (
    <Box
      flex={1}
      bgcolor="#FFFFFF"
      justifyContent={'center'}
      alignItems="center"
      p="24px"
      borderRadius={'4px'}
    >
      <HeaderCart />
      {list.map((product) => (
        <Fragment key={product.id}>
          {/* Show only mobile */}
          <Grid
            sx={{ display: { sx: 'flex', md: 'none' } }}
            container
            spacing={2}
            alignItems="center"
            mb="16px"
          >
            <Grid item xs={3}>
              <Box display={'flex'}>
                <Image
                  src={product.image}
                  width={64}
                  height={82}
                  alt={product.title}
                />
              </Box>
            </Grid>
            <Grid item xs={9}>
              <Box
                ml="16px"
                height={'20px'}
                display={'flex'}
                justifyContent={'space-between'}
                alignItems="center"
              >
                <Typography
                  color={'#2F2E41'}
                  fontWeight={700}
                  fontSize={14}
                  lineHeight={'19px'}
                >
                  {product.title}
                </Typography>
                <Typography
                  color={'#2F2E41'}
                  fontWeight={700}
                  fontSize={14}
                  lineHeight={'19px'}
                >
                  {Mask('MoneyMask', String(product.price))}
                </Typography>
                <IconButton
                  style={{ zIndex: 1 }}
                  onClick={() => removeProductFromCart(product.id)}
                >
                  <Delete />
                </IconButton>
              </Box>
              <Box
                ml="16px"
                mt={'23px'}
                display={'flex'}
                justifyContent={'space-between'}
                alignItems="center"
              >
                <Box
                  display={'flex'}
                  justifyContent={'space-between'}
                  alignItems="center"
                >
                  <IconButton
                    style={{ zIndex: 1 }}
                    onClick={() => decreaseQuantity(product.id)}
                    disabled={product.quantity <= 1}
                    sx={
                      product.quantity <= 1 ? { opacity: 0.3 } : { opacity: 1 }
                    }
                  >
                    <Decrease />
                  </IconButton>
                  <Box
                    border="1px solid #D9D9D9"
                    borderRadius="4px"
                    flex={1}
                    minWidth="24px"
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems="center"
                  >
                    <Typography>{product.quantity}</Typography>
                  </Box>
                  <IconButton
                    style={{ zIndex: 1 }}
                    onClick={() => incrementQuantity(product.id)}
                  >
                    <Increase />
                  </IconButton>
                </Box>
                <Box
                  display={'flex'}
                  flexDirection="column"
                  justifyContent={'flex-end'}
                >
                  <Typography
                    color={'#999999'}
                    fontWeight={700}
                    fontSize={12}
                    lineHeight={'16.34px'}
                  >
                    SUBTOTAL
                  </Typography>
                  <Typography
                    color={'#2F2E41'}
                    fontWeight={700}
                    fontSize={16}
                    lineHeight={'21.79px'}
                    alignSelf={'flex-end'}
                  >
                    {Mask(
                      'MoneyMask',
                      String((product.price * product.quantity).toFixed(2))
                    )}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
          {/* Show only desktop */}
          <Grid
            sx={{ display: { xs: 'none', md: 'flex' } }}
            container
            spacing={2}
            key={product.id}
            alignItems="center"
            mb="8px"
          >
            <Grid item xs={6}>
              <Box display={'flex'}>
                <Image
                  src={product.image}
                  width={89}
                  height={114}
                  alt={product.title}
                />
                <Box
                  ml="52px"
                  display={'flex'}
                  flexDirection="column"
                  justifyContent={'center'}
                  alignItems="flex-start"
                >
                  <Typography
                    color={'#2F2E41'}
                    fontWeight={700}
                    fontSize={14}
                    lineHeight={'19px'}
                    mb="8px"
                  >
                    {product.title}
                  </Typography>
                  <Typography
                    color={'#2F2E41'}
                    fontWeight={700}
                    fontSize={14}
                    lineHeight={'19px'}
                  >
                    {Mask('MoneyMask', String(product.price))}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box
                display={'flex'}
                justifyContent={'space-between'}
                alignItems="center"
              >
                <IconButton
                  style={{ zIndex: 1 }}
                  onClick={() => decreaseQuantity(product.id)}
                  disabled={product.quantity <= 1}
                  sx={product.quantity <= 1 ? { opacity: 0.3 } : { opacity: 1 }}
                >
                  <Decrease />
                </IconButton>
                <Box
                  border="1px solid #D9D9D9"
                  borderRadius="4px"
                  flex={1}
                  display={'flex'}
                  justifyContent={'center'}
                  alignItems="center"
                >
                  <Typography>{product.quantity}</Typography>
                </Box>
                <IconButton
                  style={{ zIndex: 1 }}
                  onClick={() => incrementQuantity(product.id)}
                >
                  <Increase />
                </IconButton>
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box
                display={'flex'}
                justifyContent={'flex-start'}
                alignItems="center"
              >
                <Typography alignSelf={'flex-end'}>
                  {Mask(
                    'MoneyMask',
                    String((product.price * product.quantity).toFixed(2))
                  )}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box display={'flex'} justifyContent={'flex-end'}>
                <IconButton
                  style={{ zIndex: 1 }}
                  onClick={() => removeProductFromCart(product.id)}
                >
                  <Delete />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Fragment>
      ))}
      <Box
        mt="21px"
        pt="21px"
        pb="16px"
        borderTop={'1px solid #999999'}
        sx={{ display: { sx: 'flex', md: 'none' } }}
        flex={1}
        flexDirection={'column'}
        justifyContent={'space-between'}
        alignItems="center"
      >
        <Box display={'flex'} justifyContent={'flex-end'} alignItems="center">
          <Box display={'flex'} justifyContent={'flex-end'} alignItems="center">
            <Typography
              mr={'5px'}
              color={'#999999'}
              fontWeight={700}
              fontSize={14}
              lineHeight={'19px'}
            >
              TOTAL
            </Typography>
            <Typography
              px="10px"
              color={'#2F2E41'}
              fontWeight={700}
              fontSize={24}
              lineHeight={'33px'}
            >
              {Mask('MoneyMask', String(cartAmount.toFixed(2)))}
            </Typography>
          </Box>
        </Box>
        <Button
          onClick={() => {
            resetProductList();
            changePage('checkout');
          }}
          sx={{
            width: '100%',
            height: '40px',
            mt: '16px',
            borderRadius: '4px',
            background: '#009EDD',
            ':hover': {
              bgcolor: '#009EDD',
              opacity: 0.7,
            },
          }}
        >
          <Typography
            color={'#FFFFFF'}
            fontWeight={700}
            fontSize={14}
            lineHeight={'19px'}
          >
            FINALIZAR PEDIDO
          </Typography>
        </Button>
      </Box>
      <Box
        mt="21px"
        pt="21px"
        borderTop={'1px solid #999999'}
        sx={{ display: { xs: 'none', md: 'flex' } }}
        flex={1}
        justifyContent={'space-between'}
        alignItems="center"
      >
        <Button
          onClick={() => {
            resetProductList();
            changePage('checkout');
          }}
          sx={{
            width: '235px',
            height: '40px',
            borderRadius: '4px',
            background: '#009EDD',
            ':hover': {
              bgcolor: '#009EDD',
              opacity: 0.7,
            },
          }}
        >
          <Typography
            color={'#FFFFFF'}
            fontWeight={700}
            fontSize={14}
            lineHeight={'19px'}
          >
            FINALIZAR PEDIDO
          </Typography>
        </Button>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems="center"
        >
          <Box mr="5px" alignItems="center">
            <Typography
              color={'#999999'}
              fontWeight={700}
              fontSize={14}
              lineHeight={'19px'}
            >
              TOTAL
            </Typography>
          </Box>
          <Box px="10px" alignItems="center">
            <Typography
              color={'#2F2E41'}
              fontWeight={700}
              fontSize={24}
              lineHeight={'33px'}
            >
              {Mask('MoneyMask', String(cartAmount.toFixed(2)))}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
