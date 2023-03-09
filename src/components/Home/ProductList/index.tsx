import { Grid, Box } from '@mui/material';
import { ProductCard } from '../ProductCard';
import { ProductListTypes } from './types';

export const ProductList: React.FC<ProductListTypes> = ({ products }) => {
  return (
    <Box pt="24px" pb="76px">
      <Grid rowSpacing={2} container columnSpacing={2}>
        {products?.map((product) => (
          <Grid item xs={12} md={6} lg={4} key={product.id}>
            <ProductCard
              id={product.id}
              image={product.image}
              price={product.price}
              title={product.title}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
