import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import accounting from 'accounting';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';




export default function CheckOutCard({product: {id, name, productType, image, price, rating, description}}) {

  //const [expanded, setExpanded] = React.useState(false);
  

  //const handleExpandClick = () => {
   // setExpanded(!expanded);
  //};

  return (
    <Card sx={{ maxWidth: 345 }} >
      <CardHeader
       
        action={
          <Typography    
          variante='h5'
          color='textSecondary' >
            {accounting.formatMoney(price)}
          </Typography>
        }
        title={name}
        subheader="in Stock"
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt={name}
      />
     
      <CardActions disableSpacing  >
        <div display="flex">
        {Array (rating)
        .fill()
        .map((_,i) =>(
          <p> &#11088;</p>
        ))}
        </div>

        <IconButton > 
             <DeleteIcon fontSize ="large" />     
         </IconButton>

      </CardActions>
    
    </Card>
  );
}