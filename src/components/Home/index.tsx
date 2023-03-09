import { useProducts } from '@/services/products';
import { Box } from '@mui/material';
import { Oval } from 'react-loader-spinner';
import { ProductList } from './ProductList';

export const Home = () => {
  const { data, isLoading } = useProducts();

  if (isLoading) {
    return (
      <Box position={'absolute'} top="47.5%" right="47.5%">
        <Oval
          height={80}
          width={80}
          color="#FFFFFF"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#808080"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </Box>
    );
  }

  if (!data) {
    return null;
  }

  return <ProductList products={data?.products} />;
};
