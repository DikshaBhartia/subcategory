import { dividerClasses, Grid, MenuItem, Paper, Select, Typography } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
import MyCard from "./myCard"
import pi1 from '../images/pi1.jpg'
import pi2 from '../images/pi2.jpg'
import pi3 from '../images/pi3.jpg'

export default function Main() {

    const [price, setPrice] = React.useState(0);

    const handleChange = (event) => {
        setPrice(event.target.value);
    };

    const poojaItems = [
        {
            name:"Long Diya",
            imageUrl:"/images/pi1.jpg",
            price:1000
        },
        {
            name:"Diya",
            imageUrl:"../../public/images/pi2.jpg",
            price:500
        },{
            name:"Lota",
            imageUrl:"/public/images/pi3.jpg",
            price:100
        },
    ]

    return (
        <div style={{height:'61vh'}}>
            <Typography variant="h4">
                Pooja Items
            </Typography>
            <div>
                <span style={{fontSize:'28px'}}>Filter by : </span>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={price}
                    label="Price"
                    onChange={handleChange}
                    // defaultValue=
                >
                    <MenuItem value={0}>Default</MenuItem>
                    <MenuItem value={1}>High-Low</MenuItem>
                    <MenuItem value={2}>Low-Hight</MenuItem>
                    {/* <MenuItem value={30}>Thirty</MenuItem> */}
                </Select>
            </div>
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <MyCard image={pi1}/>
                    </Grid>
                    <Grid item xs={4}>
                        <MyCard image={pi2}/>
                    </Grid>
                    <Grid item xs={4}>
                        <MyCard image={pi3}/>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
