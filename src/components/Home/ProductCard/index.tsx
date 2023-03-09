import { AddProductIcon } from '@/assets/svg/AddProductIcon';
import { useCart } from '@/contexts';
import Mask from '@/utils/mask';
import { Box, Typography, Button } from '@mui/material';
import Image from 'next/image';
import { ProductCardTypes } from './types';

export const ProductCard: React.FC<ProductCardTypes> = ({
  id,
  image,
  price,
  title,
}) => {
  const { productList, addProductToCart } = useCart();
  const index = productList.findIndex((val) => val.id == id);

  return (
    <Box
      height={305}
      bgcolor={'#FFFFFF'}
      p={'10px'}
      alignItems={'center'}
      borderRadius="4px"
    >
      <Box display={'flex'} justifyContent="center" alignItems="center">
        <Image width={147} height={188} src={image} alt={title} />
      </Box>
      <Box>
        <Box
          display={'flex'}
          justifyContent="center"
          alignItems="center"
          pt="7px"
          pb="2px"
        >
          <Typography
            color={'#333333'}
            fontWeight={700}
            fontSize={12}
            lineHeight={'16.34px'}
          >
            {title}
          </Typography>
        </Box>
        <Box
          display={'flex'}
          justifyContent="center"
          alignItems="center"
          pb="8px"
        >
          <Typography
            color={'#333333'}
            fontWeight={700}
            fontSize={16}
            lineHeight={'21.79px'}
          >
            {Mask('MoneyMask', String(price))}
          </Typography>
        </Box>
      </Box>
      <Box
        display={'flex'}
        justifyContent="center"
        alignItems="center"
        px="7px"
        pb="10px"
      >
        <Button
          disabled={index !== -1}
          sx={
            index !== -1
              ? { backgroundColor: '#039B00', width: '100%' }
              : {
                  backgroundColor: '#009EDD',
                  width: '100%',
                  ':hover': {
                    bgcolor: '#009EDD',
                    opacity: 0.7,
                  },
                }
          }
          onClick={() =>
            addProductToCart({
              id: id,
              image: image,
              price: price,
              title: title,
              quantity: 1,
            })
          }
        >
          <Box display={'flex'} justifyContent="center" alignItems="center">
            <AddProductIcon />
            <Typography
              color={'#FFFFFF'}
              fontWeight={400}
              fontSize={12}
              lineHeight={'16px'}
              ml="5px"
            >
              {index !== -1 ? 1 : 0}
            </Typography>
          </Box>
          <Typography
            color={'#FFFFFF'}
            fontWeight={700}
            fontSize={12}
            lineHeight={'16px'}
            ml="12px"
          >
            ADICIONAR AO CARRINHO
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};
