import { useCart } from '@/contexts';
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import emptyCartImage from './../../../assets/images/emptyCart.png';

const EmptyCart: React.FC = () => {
  const { changePage } = useCart();

  const goBack = () => {
    changePage('');
  };

  return (
    <Box flex={1} pb={'169px'}>
      <Box
        flex={1}
        bgcolor="#FFFFFF"
        justifyContent={'center'}
        alignItems="center"
        p={'16px'}
      >
        <Box
          display={'flex'}
          justifyContent="center"
          alignItems={'center'}
          pt="64px"
          mb="32px"
        >
          <Typography
            color={'#2F2E41'}
            fontWeight={700}
            fontSize={20}
            lineHeight={'27px'}
          >
            Parece que não há nada por aqui
          </Typography>
        </Box>
        <Box
          display={'flex'}
          justifyContent="center"
          alignItems={'center'}
          mb="32px"
        >
          <Image
            width={447}
            height={265.8}
            src={emptyCartImage}
            alt={''}
          ></Image>
        </Box>
        <Box display={'flex'} justifyContent="center" alignItems={'center'}>
          <Button
            onClick={goBack}
            sx={{
              width: '180px',
              height: '40px',
              bgcolor: '#009EDD',
              mb: '64px',
              ':hover': { opacity: 0.7, bgcolor: '#009EDD' },
            }}
          >
            <Typography
              color={'#FFFFFF'}
              fontWeight={700}
              fontSize={14}
              lineHeight={'19px'}
            >
              VOLTAR
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default EmptyCart;
