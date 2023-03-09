import { Grid, Typography } from '@mui/material';

export const HeaderCart = () => {
  return (
    <Grid
      sx={{ display: { xs: 'none', md: 'flex' } }}
      container
      spacing={2}
      mb="21px"
    >
      <Grid item xs={6}>
        <Typography
          color={'#999999'}
          fontWeight={700}
          fontSize={14}
          lineHeight={'19px'}
        >
          PRODUTO
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography
          color={'#999999'}
          fontWeight={700}
          fontSize={14}
          lineHeight={'19px'}
        >
          QTD
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography
          color={'#999999'}
          fontWeight={700}
          fontSize={14}
          lineHeight={'19px'}
        >
          SUBTOTAL
        </Typography>
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
};
