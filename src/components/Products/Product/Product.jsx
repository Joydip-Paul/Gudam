import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './Styles';

const Product = ({ productProps }) => {
    const classes = useStyles();
    return (
        <section>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={productProps.img} title={productProps.name} />
                <CardContent>
                    <div className={classes.cardContent}>
                        <Typography variant="h5" gutterBottom>
                            {productProps.name}
                        </Typography>
                        <Typography variant="h5" gutterBottom>
                            {productProps.price}
                        </Typography>
                    </div>
                    <Typography variant="body-2" color="text-secondary">{productProps.description}</Typography>
                </CardContent>
                <CardActions disableSpacing className={classes.cardActions}>
                    <IconButton aria-label="Add to Cart">
                        <AddShoppingCart />
                    </IconButton>
                </CardActions>
            </Card>
        </section>
    );
};

export default Product;