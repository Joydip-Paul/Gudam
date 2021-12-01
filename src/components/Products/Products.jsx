import React from 'react';
import {Grid} from '@material-ui/core';
import Product from './Product/Product';
import shoes from '../../Assets/shoes.jpg';
import laptop from '../../Assets/laptop.jfif';
import '../CustomCss/App.css';

const products = [
    { id: 1, name: "shoes", description: "Running shoes", price: "10$",img: shoes },
    { id: 1, name: "shoes", description: "Running shoes", price: "10$",img: shoes },
    { id: 1, name: "shoes", description: "Running shoes", price: "10$",img: shoes },
    { id: 1, name: "shoes", description: "Running shoes", price: "10$",img: shoes },
    { id: 2, name: "Laptop", description: "Cute Laptop", price: "50$",img: laptop },
    { id: 2, name: "Laptop", description: "Cute Laptop", price: "50$",img: laptop },
    { id: 2, name: "Laptop", description: "Cute Laptop", price: "50$",img: laptop },
    { id: 2, name: "Laptop", description: "Cute Laptop", price: "50$",img: laptop },
]

// import useStyles from './Styles';

const Products = ({ product }) => {
    // const classes = useStyles();
    return (
        <div className="pt-100">
            <Grid container justify="center" spacing={4}>
                {
                    products.map((productValue) => (
                        <Grid item key={productValue.id} xs={12} sm={6} lg={3}>
                            <Product productProps={productValue} />
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    );
};

export default Products;