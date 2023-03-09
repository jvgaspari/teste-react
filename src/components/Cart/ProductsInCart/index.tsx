import { ProductsInCartTypes } from "./types";
import { Grid, Box, Button, Typography, IconButton } from '@mui/material'
import Image from "next/image";
import { useCart } from "@/contexts";
import { useEffect, useState } from "react";
import Mask from "@/utils/mask";
import Decrease from "@/assets/svg/decrease";
import Increase from "@/assets/svg/increase";
import Delete from "@/assets/svg/delete";

export const ProductsInCart: React.FC<ProductsInCartTypes> = ({ list }) => {
    const { incrementQuantity, decreaseQuantity, removeProductFromCart, changePage, resetProductList } = useCart()
    const [cartAmount, setCartAmount] = useState<number>(0)
    

    useEffect(() => {
    const amount = list.reduce((acc, row) => acc + row?.price * row.quantity, 0)
    setCartAmount(amount)
    }, [list])

    return (
        <Box flex={1} bgcolor='#FFFFFF' justifyContent={'center'} alignItems='center' p='24px' borderRadius={'4px'}>
            <Grid container spacing={2} mb='21px'>
                <Grid item xs={6}>
                    <Typography color={'#999999'} fontWeight={700} fontSize={14} lineHeight={'19px'}>PRODUTO</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography color={'#999999'} fontWeight={700} fontSize={14} lineHeight={'19px'}>QTD</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography color={'#999999'} fontWeight={700} fontSize={14} lineHeight={'19px'}>SUBTOTAL</Typography>
                </Grid>
                <Grid item xs={2}>
                </Grid>
            </Grid>
            {
                list.map((product) => (
                    <Grid container spacing={2} key={product.id} alignItems='center' mb='8px'>
                        <Grid item xs={6}>
                            <Box display={'flex'} >
                                <Image src={product.image} width={89} height={114} alt={product.title} />
                                <Box ml='52px' display={'flex'} flexDirection='column' justifyContent={'center'} alignItems='flex-start' >
                                    <Typography color={'#2F2E41'} fontWeight={700} fontSize={14} lineHeight={'19px'} mb='8px'>
                                        {product.title}
                                    </Typography>
                                    <Typography color={'#2F2E41'} fontWeight={700} fontSize={14} lineHeight={'19px'}>
                                        {Mask('MoneyMask', String(product.price))}
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={2}>
                            <Box display={'flex'} justifyContent={'space-between'} alignItems='center'>
                                <IconButton 
                                    style={{zIndex: 1}} 
                                    onClick={() => decreaseQuantity(product.id)}
                                    disabled={product.quantity <= 1}
                                    sx={product.quantity <= 1 ? {opacity:0.3} : {opacity: 1}}
                                >
                                    <Decrease/>
                                </IconButton>
                                <Box border='1px solid #D9D9D9' borderRadius= '4px' flex={1} display={'flex'} justifyContent={'center'} alignItems='center'>
                                    <Typography>{product.quantity}</Typography>
                                </Box>
                                <IconButton style={{zIndex: 1}} onClick={() => incrementQuantity(product.id)}>
                                    <Increase/>
                                </IconButton>
                            </Box>
                        </Grid>
                        <Grid item xs={2}>
                            <Box display={'flex'} justifyContent={'flex-start'} alignItems='center'>
                                <Typography alignSelf={'flex-end'}>{Mask('MoneyMask', String((product.price * product.quantity).toFixed(2)))}</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={2}>
                            <Box display={'flex'} justifyContent={'flex-end'}>
                                <IconButton style={{zIndex: 1}} onClick={() => removeProductFromCart(product.id)}>
                                    <Delete/>
                                </IconButton>
                            </Box>
                        </Grid>
                    </Grid>
                ))
            }
            <Box mt='21px' pt='21px' borderTop={'1px solid #999999'} display={'flex'} flex={1} justifyContent={'space-between'} alignItems='center'>
                <Button onClick={() => {
                    resetProductList()
                    changePage('checkout')
                }}
                    sx={{width: '235px', height: '40px', borderRadius: '4px', background: '#009EDD', ':hover': {
                        bgcolor: '#009EDD',
                        opacity: 0.7
                      }}}
                >
                    <Typography color={'#FFFFFF'} fontWeight={700} fontSize={14} lineHeight={'19px'}>FINALIZAR PEDIDO</Typography>
                </Button>
                <Box display={'flex'} justifyContent={'space-between'} alignItems='center'>
                    <Box mr='5px' alignItems='center'>
                        <Typography color={'#999999'} fontWeight={700} fontSize={14} lineHeight={'19px'}>TOTAL</Typography>
                    </Box>
                    <Box px='10px' alignItems='center'>
                        <Typography color={'#2F2E41'} fontWeight={700} fontSize={24} lineHeight={'33px'}>
                            {
                                Mask('MoneyMask', String(cartAmount.toFixed(2)))
                            }
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}