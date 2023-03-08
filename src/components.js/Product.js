import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Product() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
       
        
        action={
          <Typography 
          className='{classes.action}
          variante='h5
          color='textSecondary' >
            {50}
          </Typography>
        }
        title="Shoes"
        subheader="in Stock"
      />
      <CardMedia
        component="img"
        height="194"
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
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
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
