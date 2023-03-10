import React from 'react';
import products from '../product-data';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import CheckOutCard from './CheckOutCard';

const CheckOutPage  = () =>{
    //const [{basket }, dispatch ]= useStateValue();

function FormRow(){
    return (
        <React.Fragment>
            {products.map ((item)=> (
                <Grid item xs={12} sm={8} md={6} lg={4}>
                <CheckOutCard key={item.id} product={item} />
           </Grid>

            )
            )}
        </React.Fragment>

    )
};
    return (
    <div className='{classes.root}'>
            <Grid container spacing ={3} >
                <Grid item xs={12} >
                    <Typography align='center' gutterBottom variant='h4' >
                        Shopping Card
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={8} md={9} container spacing={2} >
                    <FormRow  />
                </Grid>
                <Grid item xs={12} sm={4} md={3} >
                <Typography align='center' gutterBottom variant='h4' >
                        Total
                    </Typography>
                      
                </Grid>

           </Grid>

    </div>

)
}

export default CheckOutPage;
