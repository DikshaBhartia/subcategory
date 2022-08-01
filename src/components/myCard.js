import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Card, CardActions, CardMedia, IconButton } from '@mui/material';
// import img1 from ""


export default function myCard({image,name}) {
    return (
        <>
            <Card>
                <CardMedia
                    component="img"
                    height="330"
                    image={image}
                    
                    alt="Paella dish"
                />
                <CardActions disableSpacing>
                    <IconButton aria-label="cart">
                        <ShoppingCartIcon />
                    </IconButton>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </CardActions>
      
    </Card>
        </>
    )
}
