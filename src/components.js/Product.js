import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import accounting from 'accounting';
import { makeStyles } from '@mui/material';

const useStyles = makeStyles ((theme) =>({
  root:{
      maxWidth: 345
  },
  action:{
      marginTop: '1rem',
  },
  media:{
      height: 0,
      paddingTop: '56.25%', //16:9
  },
  expand:{
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform',{
      duration:theme.transitions.duration.shortest,})
  },
  expandOpen:{
    transform: 'rotate(180deg)',
  },

})

)

export default function Product() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} >
      <CardHeader
       
        
        action={
          <Typography 
          className={classes.action}
          variante='h5'
          color='textSecondary' >
            {accounting.formatMoney(50)}
          </Typography>
        }
        title="Shoes"
        subheader="in Stock"
      />
      <CardMedia
        component="img"
        className={classes.media}
        image="https://www.digitalsport.com.ar/files/products/617bfd1da1ae1-513524-500x500.jpg"
        alt="Zapatillas Coreracer Adidas"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Calzado zapatillas para mujer de running
        
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to Cart">
          <AddShoppingCartIcon />
        </IconButton>
        {Array (4)
        .fill()
        .map((_,i) =>(
          <p> &#11088;</p>
        ))}
        <IconButton
          
          className={(classes.expand, {
            [classes.expandOpen]: expanded,
          }) }
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          
            <Typography paragraph>
            Las zapatillas adidas Coreracer ofrecen la combinación perfecta de sujeción para running y estilo urbano. Son livianas y transpirables para mantener tus pies cómodos en todo momento. Lucen un logo adidas Badge of Sport que le pone el toque final al look de alto rendimiento.
          </Typography>
         
          </CardContent>
      </Collapse>
    </Card>
  );
}
