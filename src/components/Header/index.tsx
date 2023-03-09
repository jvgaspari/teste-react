import { Typography, Box } from '@mui/material'
import { MyCart } from './MyCart'

export const Header = () => {
    return (
        <Box height={74} py={'24.5px'} px={'10px'} sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
           <Box>
                <Typography color={'#FFFFFF'} fontWeight={700} fontSize={20}>
                    WeMovies
                </Typography>
            </Box>
            <MyCart/>
        </Box>
    )
}