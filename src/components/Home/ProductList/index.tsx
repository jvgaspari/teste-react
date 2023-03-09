import { Grid, Box } from '@mui/material';
import { ProductCard } from '../ProductCard';
import { ProductListTypes } from './types';

export const ProductList: React.FC<ProductListTypes> = ({ products }) => {

    return (
        <Box mt='24px' mb='76px' width={'960px'}>
            <Grid rowSpacing={2} container spacing={2}>
                {
                    products?.map((product) => (
                        (
                            <Grid item xs={12} md={6} lg={4} key={product.id} >
                                <ProductCard 
                                    id={product.id}
                                    image={product.image}
                                    price={product.price}
                                    title={product.title}
                                />
                            </Grid>
                        )
                    ))
                }
            </Grid>
        </Box>
    )
}